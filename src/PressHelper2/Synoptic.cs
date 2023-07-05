using Fdg = EpForceDirectedGraph.cs;
using OpennessLibrary.Hmi;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Windows.Media;
using System.Xml.Linq;
using System.IO;

namespace PressHelper2
{
    internal class Synoptic
    {
        const int SEQ_ROW_MAX = 1024;
        const int SEQ_COL_MAX = 256;//4;
        const string PLC_TAG_PROXY_DB = "WINCC Kopie I-Device";

        static readonly XNamespace nsi = "http://www.siemens.com/automation/Openness/SW/Interface/v5";
        static readonly XNamespace nsn = "";// "http://www.siemens.com/automation/Openness/SW/NetworkSource/FlgNet/v4";

        public XHmiScreen templateScreen;
        public string Name; // => plc + "." + nodes.Last().operand;

        List<Node> nodes;
        List<XElement> accesses;
        Node[,] sequence;
        int sequenceMaxRow;
        int sequenceMaxCol;

        public Synoptic(XElement network,
                        Dictionary<string, XElement> expandedSynoptics,
                        Dictionary<string, XElement> tags,
                        Dictionary<string, string> hmiTags,
                        string plcTargetName,
                        Func<string, string> getObjectCallback)
        {
            sequence = new Node[2 * SEQ_ROW_MAX, SEQ_COL_MAX + 1];

            XElement xml = new XElement(network);

            uint uid = 0;
            nodes = new List<Node>();
            Name = xml.Attribute("Name")?.Value;

            //add powerrail as first node
            nodes.Add(new Node { xml = new XElement("Powerrail", new XAttribute("UId", ++uid)), uid = uid.ToString(), faceplate = "Syn_Start" });

            accesses = xml.Element("Parts").Elements("Access").ToList();

            //add explicitly expanded operands from comment            
            List<string> expandOperands = xml.Descendants("Part").SelectMany(x => x.Descendants("Comment"))
                                            .Elements("MultiLanguageText").FirstOrDefault()?.Value.Split('\n').ToList();

            if (expandOperands == null)
                expandOperands = new List<string>();



            //populate nodes
            foreach (var part in xml.Descendants("Part"))
            {
                Node node = new Node
                {
                    xml = part,
                    uid = part.Attribute("UId").Value
                };

                switch (part.Attribute("Name").Value)
                {
                    case "Coil":
                        node.faceplate = "Syn_Coil";
                        break;
                    case "Contact":
                        if (part.Element("Negated") == null)
                            //node.faceplate = "Syn_Contact";
                            node.faceplate = "Syn_Node_NO";
                        else
                            //node.faceplate = "Syn_Contact_Neg";
                            node.faceplate = "Syn_Node_NC";
                        break;
                    case "IlCoil":
                        node.faceplate = "Syn_Coil_Interlock";
                        //node.faceplate = "Syn_Coil";
                        node.comment = Name;// part.Attribute("Comment").Value;
                        break;
                    default:
                        break;
                }



                nodes.Add(node);
            }

            //find edges
            foreach (var wire in xml.Descendants("Wire"))
            {
                wire.Element("Powerrail")?.ReplaceWith(
                        new XElement("NameCon",
                            new XAttribute("UId", "1"),
                            new XAttribute("Name", "Powerrail")));

                //get associated variable name and comment
                if (wire.Element("IdentCon") != null)
                {
                    Node node = nodes.FirstOrDefault(x => x.uid == wire.Elements("NameCon").First().Attribute("UId").Value);
                    if (node != null)
                        node.access = accesses.First(x => x.Attribute("UId").Value == wire.Element("IdentCon").Attribute("UId").Value);

                    if (string.IsNullOrEmpty(node.faceplate))
                    {
                        node.access = null;
                        continue;
                    }

                    string plcTag = "";

                    if (node.access.Element("Symbol").Elements("Component").Count() > 1)
                    {
                        //symbol might be a DB element                        
                        plcTag = GetSymbol(node.access.Element("Symbol"));

                        //check if symbol is a structured plc tag
                        XElement outValue;
                        if (plcTag.Contains("\".") && tags.TryGetValue(plcTag.Split('.')[0].Replace("\"", ""), out outValue))
                        {
                            //use dedicated DB as hmi tag
                            plcTag = $"\"{PLC_TAG_PROXY_DB}\".{plcTag}";
                            node.access.Element("Symbol").AddFirst(
                                new XElement("Component", new XAttribute("Name", PLC_TAG_PROXY_DB)));
                        }

                        //export block from plc
                        string dbName = node.access.Element("Symbol").Elements("Component").First().Attribute("Name").Value;
                        string db = getObjectCallback(dbName);

                        if (db != null)
                        {
                            XDocument doc = XDocument.Load(db);
                            XElement parent = null;
                            string parentResolvedName = "\"" + doc.Descendants("Name").First().Value + "\"";


                            //get comment from db definition
                            XElement element = new XElement(doc.Descendants(nsi + "Section").First(x => x.Attribute("Name").Value == "Static"));
                                                        
                            foreach (var item in node.access.Element("Symbol").Elements("Component").Skip(1))
                            {
                                string component = item.Attribute("Name")?.Value;
                                element = element?.Elements(nsi + "Member")?.FirstOrDefault(x => x.Attribute("Name")?.Value == component);

                                parentResolvedName += ".\"" + component + "\"";

                                //element is a plc type instance
                                if (element?.Attribute("Datatype")?.Value.Contains("\"") == true)
                                {
                                    //get plc type definition
                                    parent = TextDBs.ResolveUdt(element.Attribute("Datatype").Value.Trim('\"'), getObjectCallback, parentResolvedName);
                                }

                            }

                            if (element != null)
                                node.comment = element.Descendants(nsi + "MultiLanguageText")?.FirstOrDefault()?.Value ?? "";
                            else
                                node.comment = null;

                            //get comment from plc type instance
                            if (string.IsNullOrEmpty(node.comment) && parent != null)
                            {
                                var c = parent.Descendants().FirstOrDefault(x => x.Attribute("ResolvedName")?.Value == plcTag);
                                if (c != null)
                                    node.comment = c.Descendants("MultiLanguageText")?.FirstOrDefault()?.Value ?? "";
                                else
                                    node.comment = null;
                            }

                            //get comments from parent plc type if DB is derived from a plc type
                            if (string.IsNullOrEmpty(node.comment) && doc.Root.Element("SW.Blocks.InstanceDB") != null)
                            {
                                string typeName = doc.Root.Element("SW.Blocks.InstanceDB")?.Element("AttributeList")?.Element("InstanceOfName")?.Value;

                                parent = TextDBs.ResolveUdt(typeName, getObjectCallback);


                                var c = parent.Descendants().FirstOrDefault(x => $"\"{dbName}\".{x.Attribute("ResolvedName")?.Value}" == plcTag);
                                if (c != null)
                                    node.comment = c.Descendants("MultiLanguageText")?.FirstOrDefault()?.Value ?? "";
                                else
                                    node.comment = null;

                            }

                        }

                    }

                    if (node.comment == null)
                    {
                        //symbol is a plc tag
                        plcTag = GetSymbol(node.access.Element("Symbol"));

                        if (plcTag.Contains("\".")) 
                        {
                            //structured variables are not usable in wincc
                            //should use dedicated DB instead
                            node.access.Attribute("Scope").Value = "";
                        }


                        XElement tag = null;
                        if (tags.TryGetValue(plcTag.Replace("\"", ""), out tag))// tags.FirstOrDefault(x => x.Element("AttributeList").Element("Name").Value == searchForTag);
                        {
                            node.comment = tag.Descendants("MultilingualTextItem").First().Element("AttributeList").Element("Text").Value;
                        }
                    }

                    node.access.Add(new XElement("PlcTag", plcTag));

                    //expand local variables
                    if (node.xml.Attribute("Name").Value == "Contact" && node.access.Attribute("Scope").Value == "LocalVariable")
                    {
                        if (node.xml.Element("Negated") == null) 
                        {
                            node.access.Element("PlcTag").Value = xml.Attribute("BlockTitle").Value + ".#" + GetSymbol(node.access.Element("Symbol"));
                            expandOperands.Add(node.operand);
                        }
                        else
                        {
                            //don't expand negated nodes

                        }
                    }

                }
                else if(wire.Elements().All(x => x.Name == "NameCon"))//connecting wire
                {                   
                    Node begin = nodes.First(x => x.uid == wire.Elements("NameCon").First().Attribute("UId").Value);

                    foreach (var con in wire.Elements("NameCon").Skip(1))
                    {
                        Node end = nodes.First(x => x.uid == con.Attribute("UId").Value);

                        begin.nextNodes.Add(end);
                        end.prevNodes.Add(begin);
                    }
                }
            }

            //set hmi variable for interlock coils
            foreach (var node in nodes.Where(x => x.faceplate == "Syn_Coil_Interlock"))
            {
                var idbName = xml.Attribute("InstanceName")?.Value;
                var stepName = xml.Attribute("StepName")?.Value;

                if (string.IsNullOrEmpty(idbName) || string.IsNullOrEmpty(stepName))
                    continue;
                               
                node.access = new XElement("Access", 
                    new XElement("PlcTag", $"\"{idbName}\".\"{stepName}\".LA"),
                    new XAttribute("Scope", "GlobalVariable"));
            }

            //expand nodes
            if (expandOperands != null && expandOperands.Count > 0 && expandedSynoptics != null)
            {
                var nodesList = nodes.ToList();
                foreach (var node in nodesList)
                {
                    if (node.operand != null && expandOperands.Contains(node.operand) && expandedSynoptics.ContainsKey(node.operand))
                    {
                        Synoptic expandedSynoptic = new Synoptic(expandedSynoptics[node.operand],
                                                                 null,
                                                                 tags,
                                                                 null,
                                                                 plcTargetName,
                                                                 getObjectCallback);

                        //nodes without powerrail or coil
                        var partialNodes = expandedSynoptic.nodes
                            .Take(expandedSynoptic.nodes.Count - 1).Skip(1);


                        var partialPowerrail = expandedSynoptic.nodes.First();
                        var partialCoil = expandedSynoptic.nodes.Last();

                        //add elements to this synoptic
                        nodes.InsertRange(nodes.IndexOf(node), partialNodes);
                        accesses.AddRange(expandedSynoptic.accesses);

                        //copy powerrail connections to predecessors
                        var prevNextNodes = node.prevNodes[0].nextNodes;
                        prevNextNodes.InsertRange(prevNextNodes.IndexOf(node), partialPowerrail.nextNodes);
                        prevNextNodes.Remove(node);

                        foreach (var lastNode in partialCoil.prevNodes)
                        {
                            lastNode.nextNodes = node.nextNodes;
                        }

                        //var followingNodes = node.nextNodes.SelectMany(x => x.prevNodes).Where(y => y.Equals(node)).ToList();
                        foreach (var followingNode in node.nextNodes)
                        {
                            int index = followingNode.prevNodes.IndexOf(node);
                            followingNode.prevNodes.InsertRange(index, partialCoil.prevNodes);
                            followingNode.prevNodes.Remove(node);
                        }

                        //remove original node
                        nodes.Remove(node);
                    }
                }
            }

            //remove timers
            foreach (var node in nodes)
            {
                switch (node.xml?.Attribute("Name")?.Value)
                {
                    case "TON":
                    case "TOF":
                    case "TP":

                        node.prevNodes.FirstOrDefault().nextNodes = node.nextNodes;
                        foreach (var followingNode in node.nextNodes)
                        {
                            int index = followingNode.prevNodes.IndexOf(node);
                            followingNode.prevNodes.InsertRange(index, node.prevNodes);
                            followingNode.prevNodes.Remove(node);
                        }

                        break;

                    default:
                        break;
                }
            }

            //generate tags
            if (hmiTags != null)
                foreach (var access in nodes.Select(n => n.access).Where(x => x?.Attribute("Scope")?.Value == "GlobalVariable"))
                {
                    string plcTagName = access.Element("PlcTag").Value;

                    if (!string.IsNullOrEmpty(plcTagName))
                    {
                        string hmiTag;
                        hmiTags.TryGetValue(plcTagName, out hmiTag);

                        if (hmiTag == null)
                        {
                            hmiTag = $"Synoptik#{plcTargetName}#{hmiTags.Count}";
                            hmiTags[plcTagName] = hmiTag;
                        }

                        access.Add(new XElement("HmiTag", hmiTag));

                    }
                }
        }

        private class PartialHmiScreen
        {
            public XHmiScreen screen;
            public int row;
            public int col;
        }                   

        static XHmiScreenObject FaceplateOperand(XHmiScreen templateScreen, string faceplateName, string name, int x, int y, string varSignal, string text1, string text2)
        {
            XHmiScreenObject faceplate = templateScreen.GetObjectInstance(faceplateName);

            if (faceplateName == null || faceplate == null)
                return null;
            
            faceplate.Name = name;
            faceplate.SetAttribute("Left", x.ToString());
            faceplate.SetAttribute("Top", y.ToString());
               
            if(varSignal != "")
                faceplate.ReplaceTagReference("Synoptik_Template_Signal", "\"" + varSignal + "\"");
            
            faceplate.ReplaceText("Comment", text1);
            faceplate.ReplaceText("Operand", text2);

            return faceplate;
        }

        static XHmiScreenObject FaceplateConnector(XHmiScreen templateScreen, string faceplateName, string name, int x, int y)
        {
            XHmiScreenObject faceplate = templateScreen.GetObjectInstance(faceplateName);

            if (faceplateName == null || faceplate == null)
                return null;

            faceplate.Name = name;
            faceplate.SetAttribute("Left", x.ToString());
            faceplate.SetAttribute("Top", y.ToString());

            return faceplate;
        }

        internal class Node
        {
            public string uid;
            public string symbol = "X";
            public string faceplate = "";
            public XElement xml;

            public List<Node> prevNodes = new List<Node>();
            public List<Node> nextNodes = new List<Node>();

            public XElement access;

            public int row;
            public int col;
            public bool visited;
            public bool beginNewColumn;
            public int nextFreeColumn;


            public Fdg.Node fdgNode;

            public string operand
            {
                get
                {

                    var plcTag = access?.Element("PlcTag")?.Value.Split('.').ToList();

                    if (plcTag == null)
                        return null;

                    if (plcTag[0] == $"\"{PLC_TAG_PROXY_DB}\"")
                        plcTag.RemoveAt(0);

                    return string.Join(".", plcTag);
                }
            }

            public string text
            {
                get
                {
                    string objName = xml?.Attribute("Name")?.Value;
                    return operand ?? objName ?? symbol;
                }
            }

            public string comment;

        }
       
        private void OpenBranch(Node parent, int column)
        {
            for(int child = 0; child < parent.nextNodes.Count; child++)
            {
                //for every additional child node, add an offset to all upper rows
                //but only if the current offset is not enough
                if (child > 0)
                    for (int i = parent.row; i >= 0; i--)
                        if (maxRowWidth[i] <= parent.col + maxRowWidth[parent.row])
                            maxRowWidth[i] += 1;

                //we reset all lower offsets because we always draw top to bottom
                for (int i = parent.row+1; i < maxRowWidth.Length; i++)
                {
                    maxRowWidth[i] = 0;
                }

                //draw horizontal lines
                for (int i = parent.col; i < column + maxRowWidth[parent.row]; i++)
                {
                    sequence[parent.row * 2 + 1, i] = new Node { symbol = "─", faceplate = "Syn_Con_EW" };
                }

                //go down this leg
                FollowLeg(parent.nextNodes[child], column + maxRowWidth[parent.row]);

            }

        }

        private int[] maxRowWidth;

        private void FollowLeg(Node node, int column)
        {
            //have we found the end of the current branch?
            if (node.xml.Attribute("Name")?.Value == "O")
            {
                //set node position
                node.row = node.prevNodes[0]?.row ?? 0;
                node.col = node.prevNodes[0]?.col ?? 0;

                //have we visited all branches?
                if (node.prevNodes.All(x => x.visited))
                {
                    CloseBranch(node);
                    column = node.col;

                    //now we can continue with the next node
                }
                else
                {
                    //return to parent
                    return;
                }

            }
            else
            {
                //we are here
                node.visited = true;

                //set node position
                if (node.prevNodes.Count > 0)
                {
                    node.row = node.prevNodes[0].row + 1;
                    node.col = column;
                    //node.MaxUsedColumn = node.col;
                    //maxWidth = Math.Max(node.col, maxWidth);
                }
                else
                {
                    node.row = 0; node.col = 0;
                }

                //check for boundaries
                if (node.row * 2 > SEQ_ROW_MAX || node.col > SEQ_COL_MAX)
                    return;

                //put node in grid
                sequence[node.row * 2, node.col] = node;
                sequenceMaxRow = Math.Max(node.row * 2 + 1, sequenceMaxRow);
                sequenceMaxCol = Math.Max(node.col, sequenceMaxCol);
            }

            if (node.nextNodes.Count == 1)
            {
                //go to the next node in this leg
                FollowLeg(node.nextNodes[0], column);
            }
            else
            {
                //we found a new branch
                OpenBranch(node, column);
            }
            


        }

        private void CloseBranch(Node node)
        {
            //how long is the longest leg?
            int maxRowInThisBranch = node.prevNodes.Select(x => x.row).Max();

            //reset position
            node.row = maxRowInThisBranch;
            node.col = node.prevNodes.First().col;

            //draw vertical lines in shorter legs
            foreach (var leg in node.prevNodes)
            {

                for (int i = leg.row + 1; i <= maxRowInThisBranch; i++)
                {
                    if (sequence[i * 2, leg.col] == null)
                        sequence[i * 2, leg.col] = new Node { symbol = "│ver", faceplate = "Syn_Con_NS" };
                }
            }

            //draw horizontal lines
            for (int i = node.prevNodes.First().col; i < node.prevNodes.Last().col; i++)
            {
                sequence[node.row * 2 + 1, i] = new Node { symbol = "─hor", faceplate = "Syn_Con_EW" };
            }


        }


        public static string GetSymbol(XElement symbol)
        {
            List<string> components = new List<string>();

            foreach (var comp in symbol.Descendants("Component"))
            {             
                string text = "\"" + comp.Attribute("Name").Value + "\"";

                if (comp.Attribute("AccessModifier")?.Value == "Array")
                {
                    List<string> modifiers = new List<string>();

                    foreach (var modifier in comp.Elements("Access"))
                    {
                        if (modifier.Attribute("Scope").Value == "LiteralConstant")
                        {
                            modifiers.Add(modifier.Element("Constant").Element("ConstantValue").Value);
                        }
                        else
                        {
                            modifiers.Add(GetSymbol(modifier.Element("Symbol")));
                        }
                    }

                    text += "[" + string.Join(",", modifiers) + "]";
                }

                components.Add(text);
            }

            return string.Join(".", components);
        }
    }
}
