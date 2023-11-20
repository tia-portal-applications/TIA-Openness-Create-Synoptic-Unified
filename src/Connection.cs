using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace SynopticCreator
{
    class Connection
    {
        public int connectionID;
        /// <summary>
        /// <NameCon UId="27" Name="operand" />
        /// </summary>
        public int operandID = 0;
        /// <summary>
        /// <IdentCon UId="22" />
        /// </summary>
        public int realOperandId = 0;
        public bool isOperand;
        public int outID = 0;
        public List<int> inIDs = new List<int>();

        public Connection (int connectionID, XElement connectionInfo)
        {
            this.connectionID = connectionID;
            int.TryParse(connectionInfo.Element("IdentCon")?.Attribute("UId")?.Value, out this.realOperandId);
            var nameCons = connectionInfo.Elements("NameCon");
            int.TryParse(nameCons.FirstOrDefault(x => x.Attribute("Name").Value == "operand")?.Attribute("UId")?.Value, out this.operandID);
            isOperand = (this.operandID != 0);
            int.TryParse(nameCons.FirstOrDefault(x => x.Attribute("Name").Value == "out")?.Attribute("UId")?.Value, out this.outID);
            foreach (var nameConIn in nameCons.Where(x => x.Attribute("Name").Value.StartsWith("in")))
            {
                this.inIDs.Add(int.Parse(nameConIn.Attribute("UId").Value));
            }
        }
    }

    class Operand
    {
        public int Id;
        public string HmiTag;
        public string GlobalDb;
        public int Top;
        public int Left;
        public Dictionary<int, string> Comment = new Dictionary<int, string>();
    }
}
