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

namespace PressHelper2
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

        List<HmiTarget> hmiTargets;

        string projectName;

        public Form1()
        {
            InitializeComponent();

            comboBox1.DataSource = XProject.Projects;

#if DEBUG
            checkBox2.Checked = false;
            checkBox3.Checked = false;
            checkBox5.Checked = false;
#endif

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
            button1.Enabled = true;
            buttonSynoptics.Enabled = true;
            buttonCancel.Enabled = false;

            progressBar.Value = 0;
            progressBar.Enabled = false;
        }

        /*private void WorkerGenerateTextDBs(object sender, string projectName, List<string> plcTargets)
        {
            BackgroundWorker worker = sender as BackgroundWorker;

            try
            {
                foreach (var plcTarget in plcTargets)
                {
                    if (!worker.CancellationPending)
                        TextDBs.GenerateTextDbs(new XProject(projectName), plcTarget, UpdateTextBox);
                }

                UpdateTextBox("Import abgeschlossen");

            }
            catch (Exception ex)
            {
                UpdateTextBox(ex.Message + "\r\n" + ex.StackTrace);
            }
        }*/

        private void WorkerGenerateSynoptics(object sender, string projectName, List<string> plcTargets, List<HmiTarget> hmiTargets)
        {
            BackgroundWorker worker = sender as BackgroundWorker;

            try
            {
                foreach (var plcTarget in plcTargets)
                {
                    if (!worker.CancellationPending)
                        Synoptics.GenerateSynoptics(plcTarget,  UpdateTextBox, worker);
                }

                UpdateTextBox("Import abgeschlossen");

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
            button1.Enabled = false;
            buttonSynoptics.Enabled = false;
            buttonCancel.Enabled = true;
            progressBar.Enabled = true;

            projectName = comboBox1.Text;
            textBoxLog.Text = "";
            UpdateTextBox("Verbinde Projekt " + projectName);

            hmiTargets = new List<HmiTarget>();
            /*if (checkBox4.Checked) hmiTargets.Add(new HmiTarget()
            {
                name = "HMI_VisuGT90",
                connectionPrefix = "HMI_VisuGT90",
                rows = 18,
                columns = 6
            });
            if (checkBox5.Checked) hmiTargets.Add(new HmiTarget()
            {
                name = "HMI_RT_1",
                connectionPrefix = "HMI_Mobile",
                rows = 12,
                columns = 6
            });*/

            worker = new BackgroundWorker();
            worker.RunWorkerCompleted += WorkerCompleted;
            worker.DoWork += (o, _e) => WorkerGenerateSynoptics(o, projectName, plcTargets, hmiTargets);
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
