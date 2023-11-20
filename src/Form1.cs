using OpennessLibrary;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SynopticCreator
{
    public partial class Form1 : Form
    {
        BackgroundWorker worker;
        List<string> plcTargets
        {
            get
            {
                List<string> list = new List<string>();
                list.Add(plcNameTextBox.Text);

                return list;
            }
        }

        string projectName;

        public Form1()
        {
            InitializeComponent();

            comboBox1.DataSource = XProject.Projects;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            /*button1.Enabled = false;
            buttonSynoptics.Enabled = false;
            buttonCancel.Enabled = true;

            projectName = comboBox1.Text;
            textBoxLog.Text = "";
            UpdateTextBox("Verbinde Projekt " + projectName);

            worker = new BackgroundWorker();
            worker.RunWorkerCompleted += WorkerCompleted;
            worker.DoWork += (o, _e) => WorkerGenerateTextDBs(o, projectName, plcTargets);
            worker.WorkerSupportsCancellation = true;
            worker.RunWorkerAsync();*/
        }

        private void WorkerCompleted(object sender, RunWorkerCompletedEventArgs e)
        {
            buttonSynoptics.Enabled = true;
            buttonCancel.Enabled = false;

            progressBar.Value = 0;
            progressBar.Enabled = false;
        }
        
        private void WorkerGenerateSynoptics(object sender, string projectName, List<string> plcTargets)
        {
            BackgroundWorker worker = sender as BackgroundWorker;

            try
            {
                foreach (var plcTarget in plcTargets)
                {
                    if (!worker.CancellationPending)
                        Synoptics.GenerateSynoptics(plcTarget,  UpdateTextBox, worker);
                }

                UpdateTextBox("Export abgeschlossen");

            }
            catch (Exception ex)
            {
                UpdateTextBox(ex.Message + "\r\n" + ex.InnerException?.Message + "\r\n" + ex.StackTrace);
            }
        }

        private void UpdateTextBox(string text)
        {
            if (textBoxLog.InvokeRequired)
            {
                textBoxLog.Invoke(new Action(() => UpdateTextBox(text)));
            }
            else
            {
                textBoxLog.AppendText($"[{DateTime.Now.ToShortTimeString()}]  {text}\r\n");
            }
        }

        private void buttonSynoptics_Click(object sender, EventArgs e)
        {
            buttonSynoptics.Enabled = false;
            buttonCancel.Enabled = true;
            progressBar.Enabled = true;

            projectName = comboBox1.Text;
            textBoxLog.Text = "";
            UpdateTextBox("Verbinde Projekt " + projectName);

            worker = new BackgroundWorker();
            worker.RunWorkerCompleted += WorkerCompleted;
            worker.DoWork += (o, _e) => WorkerGenerateSynoptics(o, projectName, plcTargets);
            worker.WorkerSupportsCancellation = true;
            worker.WorkerReportsProgress = true;
            worker.ProgressChanged += (o, _e) =>
            {
                progressBar.Value = _e.ProgressPercentage;
                //System.Windows.Forms.SendKeys.Send("{F11}");
            };
            worker.RunWorkerAsync();
        }

        private void buttonCancel_Click(object sender, EventArgs e)
        {
            worker.CancelAsync();
            buttonCancel.Enabled = false;
        }
    }
}
