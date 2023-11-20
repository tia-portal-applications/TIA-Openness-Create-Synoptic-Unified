using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;
using OpennessLibrary;
using OpennessLibrary.Hmi;

namespace SynopticCreator
{
    internal class Program
    {
        [STAThread]
        static void Main()
        {
            System.Reflection.Assembly.LoadFrom(XProject.AssemblyPath);

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());

        }               
    }
}
