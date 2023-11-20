using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SynopticCreator
{
    class Member
    {
        public string Name;
        public Dictionary<string, string> Comments = new Dictionary<string, string>();
    }
    class GlobalDB
    {
        public string Name;
        public List<Member> Members = new List<Member>();
    }
}
