using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Fdg = EpForceDirectedGraph.cs;
using EpForceDirectedGraph.cs;

namespace PressHelper2
{
    internal partial class Form2 : Form
    {
        List<Synoptic.Node> nodes;
        //Synoptic.Renderer renderer;

        static float stiffness = 75;
        static float repulsion = 100000;
        static float damping = 0.1f;
        static int iterations = 10000;

        public Form2(List<Synoptic.Node> nodes)
        {
            this.nodes = nodes;

            InitializeComponent();


            textBoxStiffness.Text = stiffness.ToString();
            textBoxRepulsion.Text = repulsion.ToString();
            textBoxDamping.Text = damping.ToString();
            textBoxIterations.Text = iterations.ToString();

            Calculate();
        }

        private void Calculate()
        {
            float.TryParse(textBoxStiffness.Text, out stiffness);
            float.TryParse(textBoxRepulsion.Text, out repulsion);
            float.TryParse(textBoxDamping.Text, out damping);
            int.TryParse(textBoxIterations.Text, out iterations);

            //Fdg.Graph fdgGraph = new Fdg.Graph();

            //const int SEQ_ROW_MAX = 36;
            //const int SEQ_COL_MAX = 4;

            //Synoptic.Node[,] sequence = new Synoptic.Node[2 * SEQ_ROW_MAX, SEQ_COL_MAX + 1];

            ////fill sequence
            //Synoptic.Traverse(nodes.First(), sequence, 0, 0);

            //for (int i = 0; i < nodes.Count; i++)
            //{
            //    Synoptic.ExtendedNodeData data = new Synoptic.ExtendedNodeData(nodes[i], false);
            //    data.mass = 3.0f;
            //    data.initialPostion = new FDGVector2(nodes[i].col * 20, nodes[i].row * 10 + (nodes[i].col + 1) * 5);
            //    data.label = i.ToString();

            //    if (i == 0)
            //    {
            //        //data.mass = 100.0f;
            //        data.initialPostion = new FDGVector2(0, -500);
            //    }
            //    if (i == nodes.Count - 1)
            //    {
            //        //data.mass = 50;
            //        //data.initialPostion = new FDGVector2(500, 500);
            //    }
            //    if (nodes[i].xml.Attribute("Name")?.Value == "O")
            //    {
            //        data.mass = 5.0f;
            //        data.initialPostion = new FDGVector2(nodes[i].prevNodes.Last().col * 30, data.initialPostion.y);
            //    }

            //    Fdg.Node newNode = new Fdg.Node(i.ToString(), data);
            //    nodes[i].fdgNode = fdgGraph.CreateNode(data);

            //    if (i == 0 )//|| i == nodes.Count - 1)
            //        nodes[i].fdgNode.Pinned = true;

            //    if (true && nodes[i].faceplate != "")
            //    {
            //        data = new Synoptic.ExtendedNodeData(nodes[i], true);
            //        data.mass = 0.1f;
            //        data.initialPostion = new FDGVector2(nodes[i].col * 10, nodes[i].row * 10);
            //        data.label = "Text" + i;
            //        var textNode = fdgGraph.CreateNode(data);

            //        Synoptic.ExtendedEdgeData edgeData = new Synoptic.ExtendedEdgeData(2);
            //        edgeData.label = $"TextNode{i:d3}";
            //        edgeData.length = 0.2f;

            //        fdgGraph.CreateEdge(nodes[i].fdgNode, textNode, edgeData);
            //    }
            //}


            //for (int i = 0; i < nodes.Count; i++)
            //{
            //    for (int j = 0; j < nodes[i].nextNodes.Count; j++)
            //    {
            //        Synoptic.Node nextNode = nodes[i].nextNodes[j];
            //        Synoptic.ExtendedEdgeData data = new Synoptic.ExtendedEdgeData(3);
            //        data.label = $"Edge{i}_{j}";
            //        data.length = 1.0f;

            //        if (nodes[i].xml.Attribute("Name")?.Value == "O" || nextNode.xml.Attribute("Name")?.Value == "O")
            //            data.length = 1.0f;//0.5f;

            //        fdgGraph.CreateEdge(nodes[i].fdgNode, nextNode.fdgNode, data);
            //    }
            //}

            //Fdg.ForceDirected2D fdgPhysics = new Fdg.ForceDirected2D(fdgGraph, // instance of Graph
            //                                       stiffness, // stiffness of the spring
            //                                       repulsion, // node repulsion rate 
            //                                       damping    // damping rate  
            //                                       );

            //fdgPhysics.Threadshold = 0.000005f;


            //for (int i = 0; i < iterations; i++)
            //{
            //    fdgPhysics.Calculate(0.1f);
            //    if (fdgPhysics.WithinThreashold)
            //        break;
            //}

            //renderer = new Synoptic.Renderer(fdgPhysics);
            //renderer.Draw(0.1f);


            
            pictureBox1.Refresh();
            
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Calculate();
        }

        private void EventCalculate(object sender, EventArgs e)
        {
            //Calculate();
        }

        

        private void pictureBox1_Paint(object sender, PaintEventArgs e)
        {
            
            /*
            const float SCREEN_WIDTH = 800.0f;
            const float SCREEN_HEIGHT = 800.0f;

            Graphics g = e.Graphics;
           
            g.Clear(Color.White);

            if (renderer == null)
                return;

            renderer.max -= renderer.min;

            foreach (var edge in renderer.edges)
            {
                var edgeData = edge.Data as Synoptic.ExtendedEdgeData;

                edgeData.from -= renderer.min;
                edgeData.from.x /= renderer.max.x;
                edgeData.from.y /= renderer.max.y;
                edgeData.to -= renderer.min;
                edgeData.to.x /= renderer.max.x;
                edgeData.to.y /= renderer.max.y;

                int x1 = ((int)Math.Floor(edgeData.from.x * SCREEN_WIDTH));
                int x2 = ((int)Math.Floor(edgeData.to.x * SCREEN_WIDTH));
                int y1 = ((int)Math.Floor(edgeData.from.y * SCREEN_HEIGHT));
                int y2 = ((int)Math.Floor(edgeData.to.y * SCREEN_HEIGHT));

                Pen blackPen = new Pen(Color.FromArgb(120, Color.Black), edgeData.width * 2);

                g.DrawLine(blackPen, x1, y1, x2, y2);
            }

            foreach (var node in renderer.nodes)
            {
                var nodeData = node.Data as Synoptic.ExtendedNodeData;

                nodeData.pos -= renderer.min;
                nodeData.pos.x /= renderer.max.x;
                nodeData.pos.y /= renderer.max.y;

                int xOffset = 0, yOffset = 0;

                Brush brush = new SolidBrush(Color.Black);

                if (nodeData.textNode)
                {
                    xOffset = 88; yOffset = 26;

                    int x = ((int)Math.Floor(nodeData.pos.x * SCREEN_WIDTH)) - xOffset;
                    int y = ((int)Math.Floor(nodeData.pos.y * SCREEN_HEIGHT)) - yOffset;

                    g.FillRectangle(brush, x, y, 2*xOffset, 2*yOffset);
                    g.DrawString($"{nodeData.node.col},{nodeData.node.row}\r\n{nodeData.initialPostion.x:0},{nodeData.initialPostion.y:0}",
                        new Font(new FontFamily("Arial"), 12),
                        new SolidBrush(Color.White),
                        x,
                        y);

                }
                else if (nodeData.node.faceplate != "")
                {
                    xOffset = 20; yOffset = 20;

                    int x = ((int)Math.Floor(nodeData.pos.x * SCREEN_WIDTH)) - xOffset;
                    int y = ((int)Math.Floor(nodeData.pos.y * SCREEN_HEIGHT)) - yOffset;

                    g.FillEllipse(brush, x, y, 2 * xOffset, 2 * yOffset);
                }
                else
                {
                    continue;
                }

                

            }

            */
        }
    }
}
