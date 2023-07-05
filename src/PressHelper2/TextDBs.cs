using OpennessLibrary;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows;
using System.Xml.Linq;

namespace PressHelper2
{
    internal class TextDBs
    {
        public delegate void Log(string message);


        public static XElement ResolveUdt(string udt, Func<string, string> GetFile, string parentResolvedName = "")
        {
            string file = GetFile(udt);

            if (!File.Exists(file))
                return null;


            XDocument udtDoc = XDocument.Load(file);
            foreach (var element in udtDoc.Descendants())
            {
                element.Attribute("xmlns")?.Remove();
                element.Name = XNamespace.None + element.Name.LocalName;
            }

            udtDoc.Descendants("Section").First().SetAttributeValue("ResolvedName", parentResolvedName);

            ResolveComments(udtDoc.Descendants("Section").First(), GetFile);

            return udtDoc.Descendants("Interface").FirstOrDefault();
        }

        public static void ResolveComments(XElement parent, Func<string, string> GetFile)
        {
            foreach (var member in parent.Elements("Member"))
            {
                string memberType = member.Attribute("Datatype").Value;
                string resolvedName = parent?.Attribute("ResolvedName")?.Value + ".";
                resolvedName = resolvedName == "." ? "" : resolvedName;
                resolvedName += $"\"{member.Attribute("Name").Value}\"";

                member.SetAttributeValue("ResolvedName", resolvedName);

                if (memberType.StartsWith("\"") && memberType.EndsWith("\""))
                {
                    XElement resolvedmember = ResolveUdt(memberType.Replace("\"", ""), GetFile);
                    var overrideMembers = member.Element("Sections")?.Element("Section")?.Elements("Member");

                    if (overrideMembers != null)
                        foreach (var overrideMember in overrideMembers)
                        {
                            string overrideComment = overrideMember.Element("Comment")?.Element("MultiLanguageText")?.Value;
                            XElement original = resolvedmember.Element("Sections").Element("Section").Elements("Member")
                                .FirstOrDefault(x => x.Attribute("Name")?.Value == overrideMember.Attribute("Name")?.Value);

                            if (original != null && overrideComment != null)
                                original.Element("Comment").Element("MultiLanguageText").Value = overrideComment;
                        }

                    //member.Element("Sections")?.Element("Section")?.RemoveNodes();
                    member.ReplaceNodes(resolvedmember.Elements());
                    //member.Element("Sections").Element("Section").Add(resolvedmember.Element("Sections").Element("Section").Elements());

                }
                else if (memberType == "Bool")
                {
                    if (member.Element("Comment") == null)
                    {
                        member.Add(new XElement("Comment",
                                    new XElement("MultiLanguageText", "")));
                    }
                }
                else if (memberType.StartsWith("Array") && memberType.EndsWith(" of Bool"))
                {
                    var match = Regex.Match(memberType, @"Array\[(\d+)..(\d+)\] of Bool");
                    int lbound = int.Parse(match.Groups[1].Value);
                    int ubound = int.Parse(match.Groups[2].Value);
                    for (int i = lbound; i <= ubound; i++)
                    {
                        if (!member.Elements("Subelement").Any(x => x.Attribute("Path").Value == i.ToString()))
                        {
                            member.Add(new XElement("Subelement",
                                    new XAttribute("Path", i.ToString()),                                    
                                    new XElement("Comment",
                                        new XElement("MultiLanguageText", ""))));
                        }
                    }

                    foreach (var subelement in member.Elements("Subelement"))
                    {
                        subelement.SetAttributeValue("ResolvedName",
                            $"{resolvedName}[{subelement.Attribute("Path").Value}]");
                    }

                }
                else if (memberType == "Struct")
                {
                    ResolveComments(member, GetFile);
                }

            }
        }

        static bool AreEqual(XElement x1, XElement x2)
        {
            if (x1.Name == x2.Name)
            {
                foreach (var attr in x1.Attributes())
                {
                    if (x2.Attribute(attr.Name) == null || attr.Value != x2.Attribute(attr.Name).Value)
                        return false;
                }
                return true;
            }
            return false;
        }
        static string ConcatVarName(XElement child)
        {
            if (child.Parent?.Name == "Section" && child.Parent?.Attribute("Name")?.Value == "None" /*"Static"*/)
                return child.Attribute("Name").Value;
            else
            {
                /*if (child.Attribute("Name")?.Value == "None")
                    return ConcatVarName(child.Parent);
                else*/
                if (child.Name == "Subelement")
                    return ConcatVarName(child.Parent) + "[" + child.Attribute("Path").Value + "]";
                else if (child.Attribute("Name") != null)
                    return ConcatVarName(child.Parent) + "." + child.Attribute("Name").Value;
                else
                    return ConcatVarName(child.Parent);

            }
        }
    }
}
