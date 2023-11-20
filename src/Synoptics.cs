using OpennessLibrary;
using Siemens.Engineering;
using Siemens.Engineering.Compiler;
using Siemens.Engineering.SW;
using Siemens.Engineering.SW.Blocks;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using Newtonsoft.Json;

namespace SynopticCreator
{
    internal class Synoptics
    {
        static readonly XNamespace nsi = "http://www.siemens.com/automation/Openness/SW/Interface/v5";
        static readonly XNamespace nsn = "http://www.siemens.com/automation/Openness/SW/NetworkSource/FlgNet/v4";
        static readonly XNamespace nsg = "http://www.siemens.com/automation/Openness/SW/NetworkSource/Graph/v5";

        static Dictionary<string, string> files;
        static Action<string> Log;
        static XPlc plc;

        public static void GenerateSynoptics(string plcName, Action<string> log, BackgroundWorker worker)
        {
            Log = log;

            var project = new XProject();

            plc = project.GetPlc(plcName);


            PlcSoftware sw = plc.GetOpennessObject<PlcSoftware>() as PlcSoftware;

            files = new Dictionary<string, string>();

            string tempDir = Path.GetTempPath() + "Synoptics\\";
            if (Directory.Exists(tempDir)) Directory.Delete(tempDir, true);
            Directory.CreateDirectory(tempDir);
            
            //blocks
            ExportBlocks(sw.BlockGroup, Directory.CreateDirectory(tempDir + "Blocks\\").FullName);
            
            Log($"Generiere Synoptiken");

            List<XElement> synoptics = new List<XElement>();
            List<GlobalDB> globalDbs = new List<GlobalDB>();
            foreach (string file in Directory.EnumerateFiles(tempDir + "Blocks"))
            {
                XDocument fcDoc = XDocument.Load(file);

                var globalDbX = fcDoc.Element("Document").Element("SW.Blocks.GlobalDB");
                if (globalDbX != null)
                {
                    var globalDb = new GlobalDB() { Name = globalDbX.Element("AttributeList")?.Element("Name").Value };
                    foreach (var section in globalDbX.Element("AttributeList")?.Element("Interface")?.Element(nsi + "Sections")?.Elements(nsi + "Section"))
                    {
                        foreach (var memberX in section.Descendants(nsi + "Member"))
                        {
                            var member = new Member() { Name = memberX.Attribute("Name").Value };
                            foreach (var comment in memberX.Descendants(nsi + "MultiLanguageText"))
                            {
                                var languageKey = comment.Attribute("Lang").Value;
                                if (!member.Comments.ContainsKey(languageKey))
                                    member.Comments.Add(languageKey, comment.Value);
                            }
                            globalDb.Members.Add(member);
                        }
                    }
                    globalDbs.Add(globalDb);
                }
                else
                {
                    foreach (var comp in fcDoc.Descendants("SW.Blocks.CompileUnit"))
                    {
                        XElement el = RemoveXmlNamespace(comp);

                        if (el.Element("AttributeList")?.Element("NetworkSource")?.Element("Graph") != null) // only if GRAPH is used
                        {

                            foreach (var il in el.Descendants("Interlock"))
                            {
                                string comment = il.Element("Title")?.Element("MultiLanguageText")?.Value;

                                il.Descendants("Part").FirstOrDefault(x => x.Attribute("Name").Value == "IlCoil")?
                                    .SetAttributeValue("Comment", il.Parent.Parent.Element("Comment")?.Element("MultiLanguageText")?.Value);

                                string name = Regex.Match(comment, @"#Synoptik\s+(.*)").Groups[1].Value.Trim();

                                XElement nw = il.Descendants("FlgNet").FirstOrDefault();
                                var blockName = fcDoc.Root.Elements().Last().Element("AttributeList").Element("Name").Value;
                                nw.SetAttributeValue("Name", name);
                                nw.SetAttributeValue("BlockTitle", blockName);
                                nw.SetAttributeValue("NetworkName", el.Element("ObjectList").Elements("MultilingualText")
                                        .Where(x => x.Attribute("CompositionName").Value == "Title")
                                        .Descendants("Text").FirstOrDefault().Value);
                                nw.SetAttributeValue("StepName", il.Ancestors("Step").FirstOrDefault()?.Attribute("Name")?.Value);

                                var block = plc.GetOpennessObject<PlcBlock>(blockName);

                                var idb = ((PlcBlockGroup)block.Parent).
                                    Blocks.OfType<InstanceDB>().
                                    Where(x => x.InstanceOfName == blockName).
                                    FirstOrDefault();

                                nw.SetAttributeValue("InstanceName", idb?.Name);

                                synoptics.Add(nw);
                            }
                        }
                        else
                        {
                            XElement nw = el.Descendants("FlgNet").FirstOrDefault();

                            if (nw != null)
                            {
                                nw.SetAttributeValue("BlockTitle", fcDoc.Root.Elements().Last().Element("AttributeList").Element("Name").Value);
                                nw.SetAttributeValue("NetworkName", el.Element("ObjectList").Elements("MultilingualText")
                                        .Where(x => x.Attribute("CompositionName").Value == "Title")
                                        .Descendants("Text").FirstOrDefault().Value);
                                synoptics.Add(nw);
                            }
                        }
                    }
                }
            }

            var currentObj = sw.Parent;
            while (!(currentObj is Project)) // find TIA Portal project object
            {
                currentObj = currentObj.Parent;
            }
            var exportFolder = (currentObj as Project).Path.DirectoryName + "\\UserFiles\\Synoptic";
            Log("Export JSON files to :" + exportFolder);

            if (!Directory.Exists(exportFolder))
                Directory.CreateDirectory(exportFolder);

            foreach(var element in synoptics)
            {
                CreateJson(element, exportFolder, ref globalDbs);
            }
        }

        static void CreateJson (XElement element, string exportFolder, ref List<GlobalDB> globalDbs)
        {
            int xStart = 20;
            int yStart = 20;
            int yIncrement = 50;
            int xIncrement = 330;
            string BlockTitle = element.Attribute("BlockTitle").Value;
            string networkName = element.Attribute("NetworkName").Value;

            List<XElement> operands = element.Element("Parts").Elements("Access").ToList();
            List<Operand> operandItems = new List<Operand>();
            //get all operands
            foreach (XElement operand in operands)
            {
                int operandID = int.Parse(operand.Attribute("UId").Value);
                var symbol = operand.Element("Symbol");
                if (symbol != null)
                {
                    List<XElement> names = symbol.Elements("Component").ToList();
                    var operandName = new List<string>();

                    for (int i = 1; i < names.Count; i++)
                    {
                        operandName.Add(names[i].Attribute("Name").Value);
                    }
                    string hmiTagName = string.Join(".", operandName);

                    string globalDbName = names[0].Attribute("Name").Value;
                    var member = globalDbs.FirstOrDefault(x => x.Name == globalDbName)?.Members.FirstOrDefault(x => x.Name == hmiTagName);
                    Dictionary<int, string> comments = new Dictionary<int, string>();
                    if (member != null)
                    {
                        foreach (var comment in member.Comments)
                        {
                            comments.Add(toLangInt(comment.Key), comment.Value);
                        }
                    }
                    operandItems.Add(new Operand()
                    {
                        Id = operandID,
                        HmiTag = hmiTagName,
                        GlobalDb = globalDbName,
                        Comment = comments
                    });
                }
                else
                {
                    Log("Cannot find Symbol of Operand with id " + operandID);
                }
            }

            List<XElement> connectors = element.Element("Wires").Elements("Wire").ToList();
            List<Connection> sortedConnections = new List<Connection>();

            //Get all connections
            foreach (XElement connector in connectors)
            {
                int connectionID = int.Parse(connector.Attribute("UId").Value);

                Connection connection = new Connection(connectionID, connector);

                if(connector.Element("IdentCon") != null)
                {
                    connection.isOperand = true;                    
                }
                
                sortedConnections.Add(connection);
            }

            List<List<int>> connections = FindConnectedOperands(sortedConnections);

            //Basic sorting of operands 
            int xGrowth = 0;
            foreach (Operand operand in operandItems)
            {
                operand.Top = xStart + yIncrement * xGrowth;
                xGrowth++;
                operand.Left = yStart;
            }

            //Split connections with more than one target operand, alter positions of operands
            int originalCount = connections.Count;
            for (int i = 0; i < originalCount; i++)
            {
                List<int> connection = connections[i];
                int yCounter = 0;
                if (connection.Count>2)
                {
                    var sourceOperand = operandItems.FirstOrDefault(x => x.Id == connection[0]);
                    if (sourceOperand != null)
                    {
                        for (int j = 1; j < connection.Count; j++)
                        {
                            int targetId = connection[j];
                            var connectedOperandItem = operandItems.FirstOrDefault(x => x.Id == targetId);
                            if (connectedOperandItem != null)
                            {
                                List<int> newConnection = new List<int>();
                                newConnection.Add(connection[0]);
                                newConnection.Add(connectedOperandItem.Id);
                                connections.Add(newConnection);
                                connectedOperandItem.Left += yCounter * xIncrement;
                                // set also all following operands in this line to same Left position

                                yCounter++;
                                connectedOperandItem.Top = sourceOperand.Top + yIncrement;
                                if (j == connection.Count - 1) // set the xPositions of all following operands new
                                {
                                    int startxPos = connectedOperandItem.Top;
                                    int xGrowth_ = 0;
                                    for (int k = j + 1; k < originalCount && k < operandItems.Count; k++)
                                    {
                                        operandItems[k].Top = startxPos + yIncrement * xGrowth_;
                                        xGrowth_++;
                                    }
                                }
                            }
                            else
                            {
                                Log("Cannot find connectedOperandItem with Id " + targetId);
                            }
                        }
                        connections.Remove(connection);
                        i--;
                        originalCount--;
                    }
                    else
                    {
                        Log("Cannot find source operand with Id " + connection[0]);
                    }
                }
            }

            WriteJson(connections, operandItems, BlockTitle + "#" + networkName, exportFolder);
        }

        private static int toLangInt(string key)
        {
            switch (key)
            {
                case "en-US":
                    return 1033;
                case "de-DE":
                    return 1031;
                default:
                    return 127;
            }
        }

        static public List<List<int>> FindConnectedOperands(List<Connection> connections)
        {
            List<List<int>> connectedOperands = new List<List<int>>();
            var operands = connections.Where(x => x.isOperand == true);
            var connectionPoints = connections.Where(x => x.isOperand == false);

            //find and save connected operands
            foreach (Connection operand in operands)
            {
                List<int> operandConnection = new List<int>();
                operandConnection.Add(operand.realOperandId); // add source id
                // 2 operands are always connected via one or multiple connectionPoints
                foreach (Connection connectionPoint in connectionPoints.Where(x => x.outID == operand.operandID)) // filter by only fitting connection points
                {
                    // now we have a connectionPoint, so search for all next operands
                    foreach (int inId in connectionPoint.inIDs)
                    {
                        var targetOperand = operands.FirstOrDefault(x => x.operandID == inId);
                        if (targetOperand != null)
                        {
                            operandConnection.Add(targetOperand.realOperandId);
                        }
                        else // sometimes there is another connection inbetween (when multiple operands goes to one operand)
                        {
                            var dummyConnectionInbetween = connectionPoints.FirstOrDefault(x => x.outID == inId);
                            if (dummyConnectionInbetween != null)
                            {
                                var targetOperand_ = operands.FirstOrDefault(x => dummyConnectionInbetween.inIDs.Contains(x.operandID));
                                if (targetOperand_ != null)
                                {
                                    operandConnection.Add(targetOperand_.realOperandId);
                                }
                            }
                        }
                    }
                }

                connectedOperands.Add(operandConnection);
            }

            return connectedOperands;
        }

        static void WriteJson(List<List<int>>connections, List<Operand> operands, string blockTitle, string exportFolder)
        {
            blockTitle = string.Join("_", blockTitle.Split(Path.GetInvalidFileNameChars()));
            var network = new Network() { Name = blockTitle, Steps = operands };
            //Connectors get added
            var connectionsWith2Connectors = connections.Where(x => x.Count == 2);
            int j = 0;
            foreach (var connection in connectionsWith2Connectors)
            {
                if (connection.Count == 2)
                {
                    network.Connectors.Add(new Connector() { SourceId = connection[0], DestinationId = connection[1] });
                }
                j++;
            }
            Log(blockTitle + " finished");
            //Declare here where to save the json files
            string jsonString = JsonConvert.SerializeObject(network, Formatting.Indented);
            File.WriteAllText(exportFolder + "\\" + blockTitle + ".json", jsonString);
        }


        static void ExportBlocks(PlcBlockGroup group, string directory)
        {
            foreach (var block in group.Blocks)
            {
                Log($"Exportiere Baustein \"{block.Name}\"");

                if (!block.IsConsistent)
                   block.GetService<ICompilable>()?.Compile();

                if (block.IsConsistent)
                {
                    try {
                        block.Export(
                            new FileInfo(directory + Directory.GetFiles(directory).Length + ".xml"),
                            Siemens.Engineering.ExportOptions.None);
                    }
                    catch (Exception ex)
                    {
                        if (ex.Message.Contains("is not permitted"))
                        {
                            Log(ex.Message);
                        }
                        else
                        {
                            throw;
                        }
                    }
                }
                else
                    Log($"Export nicht möglich, weil der Baustein inkonsistent ist: \"{block.Name}\"");
            }

            foreach (var subgroup in group.Groups)
            {
                ExportBlocks(subgroup, directory);
            }
        }
        
        static XElement RemoveXmlNamespace(XElement xml)
        {
            XElement copy = new XElement(xml);

            foreach (var element in copy?.Descendants())
            {
                element.Attribute("xmlns")?.Remove();
                element.Name = XNamespace.None + element.Name.LocalName;
            }

            return copy;
        }

    }
}
