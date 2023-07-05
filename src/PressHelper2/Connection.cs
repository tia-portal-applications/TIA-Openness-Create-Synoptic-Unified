using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace PressHelper2
{
    class Connection
    {
        public int connectionID;
        public XElement connectionInfo;
        public bool isOperand;

        public Connection (int connectionID, XElement connectionInfo)
        {
            this.connectionID = connectionID;
            this.connectionInfo = connectionInfo;
            this.isOperand = false;

            return;
        }
    }

    class Operand
    {
        public int id;
        public string name;
        public int xPosition;
        public int yPosition;

        public Operand (int id, string name)
        {
            this.id = id;
            this.name = name;

            return;
        }
    }
}
