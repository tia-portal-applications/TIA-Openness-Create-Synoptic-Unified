using OpennessLibrary;
using OpennessLibrary.Hmi;
using Siemens.Engineering;
using Siemens.Engineering.Compiler;
using Siemens.Engineering.Hmi.Tag;
using Siemens.Engineering.HmiUnified.HmiConnections;
using Siemens.Engineering.HW;
using Siemens.Engineering.SW;
using Siemens.Engineering.SW.Blocks;
using Siemens.Engineering.SW.Tags;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace PressHelper2
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
            Directory.CreateDirectory(tempDir + "ExportedFiles\\");

            //tag tables
            ExportTagTables(sw.TagTableGroup, Directory.CreateDirectory(tempDir + "TagTables\\").FullName);

            Dictionary<string, XElement> tags = new Dictionary<string, XElement>();
            foreach (string file in Directory.EnumerateFiles(tempDir + "TagTables"))
            {
                XDocument doc = XDocument.Load(file);
                foreach (var tag in doc.Root.Descendants("SW.Tags.PlcTag"))
                {
                    tags.Add(tag.Element("AttributeList").Element("Name").Value, tag);
                }

            }


            //blocks
            ExportBlocks(sw.BlockGroup, Directory.CreateDirectory(tempDir + "Blocks\\").FullName);

            int i = 0;

            Log($"Suche Netzwerke");
            Dictionary<string, XElement> expandedSynoptics = new Dictionary<string, XElement>();
            foreach (string file in Directory.EnumerateFiles(tempDir + "Blocks"))
            {

                XDocument fcDoc = XDocument.Load(file);
                foreach (var comp in fcDoc.Descendants("SW.Blocks.CompileUnit"))
                {
                    XElement el = RemoveXmlNamespace(comp);
                    XElement nw = el.Descendants("FlgNet")?.FirstOrDefault();

                    if (nw == null) break;

                    //add block title to network
                    nw.SetAttributeValue("BlockTitle", fcDoc.Root.Elements().Last().Element("AttributeList").Element("Name").Value);

                    //search for comment hashtags
                    string comment = el.Element("ObjectList").Elements("MultilingualText")
                            .Where(x => x.Attribute("CompositionName").Value == "Comment")
                            .Descendants("Text").FirstOrDefault().Value;

                        string access = Synoptic.GetSymbol(el.Descendants("Access").Last().Element("Symbol"));
                        if (!expandedSynoptics.ContainsKey(access))
                        {
                            expandedSynoptics.Add(access, nw);
                        }
                            

                    //search for local variables
                    string coilUid = nw.Descendants("Part")?.FirstOrDefault(x => x.Attribute("Name")?.Value == "Coil")?.Attribute("UId")?.Value;
                    string accessUid = nw.Descendants("Wire")?.FirstOrDefault(x => x.Element("NameCon")?.Attribute("UId")?.Value == coilUid)?
                        .Element("IdentCon")?.Attribute("UId")?.Value;

                    var localAccess = nw.Descendants("Access")?.FirstOrDefault(x => x.Attribute("Scope").Value == "LocalVariable" &&
                        x.Attribute("UId").Value == accessUid);

                    if (localAccess != null)
                    {
                        access = nw.Attribute("BlockTitle").Value + ".#" + Synoptic.GetSymbol(localAccess.Element("Symbol"));

                        if (!expandedSynoptics.ContainsKey(access))
                        {
                            expandedSynoptics.Add(access, nw);
                        }
                    }
                }
            }

            Log($"Generiere Synoptiken");

            List<XElement> synoptics = new List<XElement>();
            foreach (string file in Directory.EnumerateFiles(tempDir + "Blocks"))
            {
                XDocument fcDoc = XDocument.Load(file);    

                foreach (var comp in fcDoc.Descendants("SW.Blocks.CompileUnit"))
                {
                    XElement el = RemoveXmlNamespace(comp);

                    if (el.Element("AttributeList")?.Element("NetworkSource")?.Element("Graph") != null)
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
                            nw.SetAttributeValue("StepName", il.Ancestors("Step").FirstOrDefault()?.Attribute("Name")?.Value);

                            var block = plc.GetOpennessObject<Siemens.Engineering.SW.Blocks.PlcBlock>(blockName);

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

                        if(nw != null)
                        {
                            nw.SetAttributeValue("BlockTitle", fcDoc.Root.Elements().Last().Element("AttributeList").Element("Name").Value);
                            synoptics.Add(nw);
                        }
                    }
                }                
            }

            var exportFolder = (sw.Parent as Project).Path.DirectoryName + "\\UserFiles\\Synoptic";
            if (!Directory.Exists(exportFolder))
                Directory.CreateDirectory(exportFolder);

            foreach(var element in synoptics)
            {
                CreateJson(element, exportFolder);
            }
        }

        static void CreateJson (XElement element, string exportFolder)
        {
            int xStart = 20;
            int yStart = 20;
            int xIncrement = 30;
            int yIncrement = 100;
            string BlockTitle = element.Attribute("BlockTitle").Value;

            List<XElement> operands = element.Element("Parts").Elements("Access").ToList();
            List<Operand> operandItems = new List<Operand>();
            //get all operands
            foreach (XElement operand in operands)
            {
                int operandID = int.Parse(operand.Attribute("UId").Value);
                List<XElement> names = operand.Element("Symbol").Elements("Component").ToList();
                string operandName = null;

                if (names.Count > 1)
                {
                    operandName = names[names.Count - 1].Attribute("Name").Value;
                }
                else
                {
                    operandName = names[0].Attribute("Name").Value;
                }

                operandItems.Add(new Operand(operandID, operandName));
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
                operand.xPosition = xStart + xIncrement * xGrowth;
                xGrowth++;
                operand.yPosition = yStart;
            }

            int xCounter = 0;
            int yCounter = 0;

            //Split connections with more than one target operand, alter positions of operands
            foreach (List<int> connection in connections)
            {
                yCounter = 0;
                xCounter = 0;
                if (connection.Count>2)
                {
                    foreach(Operand operand in operandItems)
                    {
                        if(connection.Contains(operand.id)&& operand.id != connection[0])
                        {
                            List<int>newConnection = new List<int>();
                            newConnection.Add(connection[0]);
                            newConnection.Add(operand.id);
                            connections.Add(newConnection);
                            operand.yPosition += yCounter * yIncrement;

                            
                            yCounter++;
                            xCounter++;
                        }
                        operand.xPosition -= xCounter * xIncrement;
                    }
                    connections.Remove(connection);
                }
            }

            WriteJson(connections, operandItems, BlockTitle, exportFolder);
        }

        static public List<List<int>> FindConnectedOperands(List<Connection> connections)
        {
            List<List<int>> operandConnectionIDs = new List<List<int>> ();
            List<List<int>> connectionPointIDs = new List<List<int>>();
            List<List<int>> connectedOperands = new List<List<int>>();

            //Sort and create lists of operands and connections
            foreach(Connection connection in connections)
            {
                if(connection.isOperand)
                {
                    int connectionID = (int.Parse(connection.connectionInfo.Element("NameCon").Attribute("UId").Value));
                    int operandID = (int.Parse(connection.connectionInfo.Element("IdentCon").Attribute("UId").Value));
                    List<int> connector = new List<int>();
                    connector.Add(connectionID);
                    connector.Add(operandID);
                    operandConnectionIDs.Add(connector);
                }
                else
                {
                    List<int> connectionIds = new List<int>();
                    List<XElement> connectionPoints = connection.connectionInfo.Elements("NameCon").ToList();
                    foreach(XElement connectionPoint in connectionPoints)
                    {
                        connectionIds.Add(int.Parse(connectionPoint.Attribute("UId").Value));
                    }
                    connectionPointIDs.Add(connectionIds);
                }
            }

            //find and save connected operands
            foreach(List<int> operand in operandConnectionIDs)
            {
                List<int> operandConnection = new List<int>();
                operandConnection.Add(operand[1]);

                foreach(List<int> connection in connectionPointIDs)
                {
                    if(connection.Contains(operand[0]))
                    {
                        connection.Remove(operand[0]);
                        foreach(List<int> operandEndPoint in operandConnectionIDs)
                        {
                            if(connection.Contains(operandEndPoint[0]))
                            {
                                operandConnection.Add(operandEndPoint[1]);
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
            List<string> textToWrite = new List<string>();

            textToWrite.Add("{");
            textToWrite.Add("    Name: " + blockTitle + ",");
            textToWrite.Add("    Steps: [");

            //operands get added
            foreach (Operand operand in operands)
            {
                string line = "        { Id: " + operand.id + ", HmiTag: " + operand.name + ", Top: " + operand.xPosition + ", Left: " + operand.yPosition + "}";
                textToWrite.Add(line);
            }

            textToWrite.Add("    ], ");
            textToWrite.Add("    Connectors: [");

            //Connectors get added
            foreach (List<int> connection in connections)
            {
                if(connection.Count==2)
                {
                    string line = "        { SourceId: " + connection[0] + ", TargetId: " + connection[1] + "}";
                    textToWrite.Add(line);
                }
            }

            textToWrite.Add("    ]");
            textToWrite.Add("}");

            Log(blockTitle + " finished");
            //Declare here where to save the json files
            File.WriteAllLines(exportFolder + "\\" + blockTitle+ ".json", textToWrite.ToArray());
        }


        static void ExportBlocks(PlcBlockGroup group, string directory)
        {
            foreach (var block in group.Blocks)
            {
                Log($"Exportiere Baustein \"{block.Name}\"");

                if (!block.IsConsistent)
                   block.GetService<ICompilable>()?.Compile();

                if (block.IsConsistent)
                    block.Export(
                        new FileInfo(directory + Directory.GetFiles(directory).Length + ".xml"),
                        Siemens.Engineering.ExportOptions.None);
                else
                    Log($"Export nicht möglich: Baustein \"{block.Name}\"");
            }

            foreach (var subgroup in group.Groups)
            {
                ExportBlocks(subgroup, directory);
            }
        }

        static string ExportObject(string directory, string name)
        {
            if (files.ContainsKey(name))
            {
                return files[name];
            }
            else
            {
                Log($"Exportiere \"{name}\"");
                string file = directory + Directory.GetFiles(directory).Length + ".xml";
                var b = plc.GetPlcBlock(name);
                if (b is XPlcBlock) {
                    XPlcBlock block = b as XPlcBlock;
                    block.Save(file, true);
                }
                else {
                    var p = plc.GetPlcType(name);
                    if (p is XPlcType) {
                        XPlcType type = p as XPlcType;
                        type.Save(file, true);
                    }
                }

                if (File.Exists(file))
                {
                    files.Add(name, file);
                    return file;
                }
                else
                {
                    Log($"Export nicht möglich: \"{name}\"");
                    files.Add(name, null);
                    return null;
                }
            }
                      
        }

        static void ExportTagTables(PlcTagTableGroup group, string directory)
        {
            foreach (var tagTable in group.TagTables)
            {
                Log($"Exportiere Variablentabelle \"{tagTable.Name}\"");

                tagTable.Export(
                    new FileInfo(directory + Directory.GetFiles(directory).Length + ".xml"),
                    Siemens.Engineering.ExportOptions.None);

            }

            foreach (var subgroup in group.Groups)
            {
                ExportTagTables(subgroup, directory);
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
