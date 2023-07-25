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
                    //add network name to network
                    nw.SetAttributeValue("NetworkName", el.Element("ObjectList").Elements("MultilingualText")
                            .Where(x => x.Attribute("CompositionName").Value == "Title")
                            .Descendants("Text").FirstOrDefault().Value);

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
                            nw.SetAttributeValue("NetworkName", el.Element("ObjectList").Elements("MultilingualText")
                                    .Where(x => x.Attribute("CompositionName").Value == "Title")
                                    .Descendants("Text").FirstOrDefault().Value);
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
                            nw.SetAttributeValue("NetworkName", el.Element("ObjectList").Elements("MultilingualText")
                                    .Where(x => x.Attribute("CompositionName").Value == "Title")
                                    .Descendants("Text").FirstOrDefault().Value);
                            synoptics.Add(nw);
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
            string networkName = element.Attribute("NetworkName").Value;

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

            //Split connections with more than one target operand, alter positions of operands
            int originalCount = connections.Count;
            for (int i = 0; i < originalCount; i++)
            {
                List<int> connection = connections[i];
                int yCounter = 0;
                if (connection.Count>2)
                {
                    var sourceOperand = operandItems.FirstOrDefault(x => x.id == connection[0]);
                    for (int j = 1; j < connection.Count; j++)
                    {
                        int targetId = connection[j];
                        var connectedOperandItem = operandItems.FirstOrDefault(x => x.id == targetId);
                        List<int> newConnection = new List<int>();
                        newConnection.Add(connection[0]);
                        newConnection.Add(connectedOperandItem.id);
                        connections.Add(newConnection);
                        connectedOperandItem.yPosition += yCounter * yIncrement;
                        
                        yCounter++;
                        connectedOperandItem.xPosition = sourceOperand.xPosition + xIncrement;
                        if (j == connection.Count - 1) // set the xPositions of all following operands new
                        {
                            int startxPos = connectedOperandItem.xPosition;
                            int xGrowth_ = 0;
                            for (int k = j + 1; k < originalCount; k++)
                            {
                                operandItems[k].xPosition = startxPos + xIncrement * xGrowth_;
                                xGrowth_++;
                            }
                        }
                    }
                    connections.Remove(connection);
                    i--;
                    originalCount--;
                }
            }

            WriteJson(connections, operandItems, BlockTitle + "#" + networkName, exportFolder);
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
            List<string> textToWrite = new List<string>();

            textToWrite.Add("{");
            textToWrite.Add("    \"Name\": \"" + blockTitle + "\",");
            textToWrite.Add("    \"Steps\": [");

            //operands get added
            for (int i = 0; i < operands.Count; i++)
            {
                Operand operand = operands[i];
                // TODO: adjust comment to a good name, not just the name of the tag
                string line = "        { \"Id\": " + operand.id + ", \"HmiTag\": \"" + operand.name + "\", \"Top\": " + operand.xPosition + ", \"Left\": " + operand.yPosition + ", \"Comment\": \"" + operand.name + "\"}";
                if (i < operands.Count - 1)
                    line += ","; // comma at the end of line to seperate the objects
                textToWrite.Add(line);
            }

            textToWrite.Add("    ], ");
            textToWrite.Add("    \"Connectors\": [");

            //Connectors get added
            var connectionsWith2Connectors = connections.Where(x => x.Count == 2);
            int j = 0;
            int connectionCount = connectionsWith2Connectors.Count();
            foreach (var connection in connectionsWith2Connectors)
            {
                if (connection.Count==2)
                {
                    string line = "        { \"SourceId\": " + connection[0] + ", \"DestinationId\": " + connection[1] + "}";
                    if (j < connectionCount - 1)
                        line += ","; // comma at the end of line to seperate the objects
                    textToWrite.Add(line);
                }
                j++;
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
