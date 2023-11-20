using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SynopticCreator
{
    class Network
    {
        public string Name;
        public List<Operand> Steps = new List<Operand>();
        public List<Connector> Connectors = new List<Connector>();
    }

    class Connector
    {
        public int SourceId;
        public int DestinationId;
    }
}
