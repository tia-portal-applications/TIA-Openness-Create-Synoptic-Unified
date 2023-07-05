namespace PressHelper2
{
    partial class Form2
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.textBoxStiffness = new System.Windows.Forms.TextBox();
            this.textBoxRepulsion = new System.Windows.Forms.TextBox();
            this.textBoxDamping = new System.Windows.Forms.TextBox();
            this.textBoxIterations = new System.Windows.Forms.TextBox();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.Location = new System.Drawing.Point(10, 10);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(800, 800);
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.pictureBox1_Click);
            this.pictureBox1.Paint += new System.Windows.Forms.PaintEventHandler(this.pictureBox1_Paint);
            // 
            // textBoxStiffness
            // 
            this.textBoxStiffness.Location = new System.Drawing.Point(842, 65);
            this.textBoxStiffness.Name = "textBoxStiffness";
            this.textBoxStiffness.Size = new System.Drawing.Size(100, 20);
            this.textBoxStiffness.TabIndex = 1;
            this.textBoxStiffness.Text = "80";
            this.textBoxStiffness.TextChanged += new System.EventHandler(this.EventCalculate);
            // 
            // textBoxRepulsion
            // 
            this.textBoxRepulsion.Location = new System.Drawing.Point(842, 91);
            this.textBoxRepulsion.Name = "textBoxRepulsion";
            this.textBoxRepulsion.Size = new System.Drawing.Size(100, 20);
            this.textBoxRepulsion.TabIndex = 1;
            this.textBoxRepulsion.Text = "80000";
            this.textBoxRepulsion.TextChanged += new System.EventHandler(this.EventCalculate);
            // 
            // textBoxDamping
            // 
            this.textBoxDamping.Location = new System.Drawing.Point(842, 117);
            this.textBoxDamping.Name = "textBoxDamping";
            this.textBoxDamping.Size = new System.Drawing.Size(100, 20);
            this.textBoxDamping.TabIndex = 1;
            this.textBoxDamping.Text = "0,75";
            this.textBoxDamping.TextChanged += new System.EventHandler(this.EventCalculate);
            // 
            // textBoxIterations
            // 
            this.textBoxIterations.Location = new System.Drawing.Point(842, 143);
            this.textBoxIterations.Name = "textBoxIterations";
            this.textBoxIterations.Size = new System.Drawing.Size(100, 20);
            this.textBoxIterations.TabIndex = 1;
            this.textBoxIterations.Text = "1000";
            this.textBoxIterations.TextChanged += new System.EventHandler(this.EventCalculate);
            // 
            // Form2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(974, 861);
            this.Controls.Add(this.textBoxIterations);
            this.Controls.Add(this.textBoxDamping);
            this.Controls.Add(this.textBoxRepulsion);
            this.Controls.Add(this.textBoxStiffness);
            this.Controls.Add(this.pictureBox1);
            this.Name = "Form2";
            this.Text = "Form2";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.TextBox textBoxStiffness;
        private System.Windows.Forms.TextBox textBoxRepulsion;
        private System.Windows.Forms.TextBox textBoxDamping;
        private System.Windows.Forms.TextBox textBoxIterations;
    }
}