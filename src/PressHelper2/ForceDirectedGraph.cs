using EpForceDirectedGraph.cs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PressHelper2
{
    internal class ForceDirectedGraph
    {
        public Renderer renderer { get; private set; }

        float stiffness = 75;
        float repulsion = 100000;
        float damping = 0.1f;
        int iterations = 10000;

        public ForceDirectedGraph(List<Synoptic.Node> nodes)
        {
            Graph fdgGraph = new Graph();

            for (int i = 0; i < nodes.Count; i++)
            {
                ExtendedNodeData data = new ExtendedNodeData(nodes[i], false);
                data.mass = 3.0f;
                data.initialPostion = new FDGVector2(nodes[i].col * 20, nodes[i].row * 10 + (nodes[i].col + 1) * 5);
                data.label = i.ToString();

                if (i == 0)
                {
                    //data.mass = 100.0f;
                    data.initialPostion = new FDGVector2(0, -500);
                }
                if (i == nodes.Count - 1)
                {
                    //data.mass = 50;
                    data.initialPostion = new FDGVector2(500, 500);
                }
                if (nodes[i].xml.Attribute("Name")?.Value == "O")
                {
                    data.mass = 5.0f;
                    data.initialPostion = new FDGVector2(nodes[i].prevNodes.Last().col * 30, data.initialPostion.y);
                }

                Node newNode = new Node(i.ToString(), data);
                nodes[i].fdgNode = fdgGraph.CreateNode(data);

                if (i == 0)//|| i == nodes.Count - 1)
                    nodes[i].fdgNode.Pinned = true;

                if (true && nodes[i].faceplate != "")
                {
                    data = new ExtendedNodeData(nodes[i], true);
                    data.mass = 0.1f;
                    data.initialPostion = new FDGVector2(nodes[i].col * 10, nodes[i].row * 10);
                    data.label = "Text" + i;
                    var textNode = fdgGraph.CreateNode(data);

                    ExtendedEdgeData edgeData = new ExtendedEdgeData(2);
                    edgeData.label = $"TextNode{i:d3}";
                    edgeData.length = 0.2f;

                    fdgGraph.CreateEdge(nodes[i].fdgNode, textNode, edgeData);
                }
            }


            for (int i = 0; i < nodes.Count; i++)
            {
                for (int j = 0; j < nodes[i].nextNodes.Count; j++)
                {
                    Synoptic.Node nextNode = nodes[i].nextNodes[j];
                    ExtendedEdgeData data = new ExtendedEdgeData(3);
                    data.label = $"Edge{i}_{j}";
                    data.length = 1.0f;

                    if (nodes[i].xml.Attribute("Name")?.Value == "O" || nextNode.xml.Attribute("Name")?.Value == "O")
                        data.length = 1.0f;//0.5f;

                    fdgGraph.CreateEdge(nodes[i].fdgNode, nextNode.fdgNode, data);
                }
            }

            ForceDirected2D fdgPhysics = new ForceDirected2D(fdgGraph, // instance of Graph
                                                   stiffness, // stiffness of the spring
                                                   repulsion, // node repulsion rate 
                                                   damping    // damping rate  
                                                   );

            fdgPhysics.Threadshold = 0.000005f;


            for (int i = 0; i < iterations; i++)
            {
                fdgPhysics.Calculate(0.1f);
                if (fdgPhysics.WithinThreashold)
                    break;
            }

            renderer = new Renderer(fdgPhysics);
            renderer.Draw(0.1f);

        }

    }


    internal class ExtendedEdgeData : EdgeData
    {
        public int width;

        public AbstractVector from;
        public AbstractVector to;

        public ExtendedEdgeData(int width) : base()
        {
            this.width = width;
        }
    }

    internal class ExtendedNodeData : NodeData
    {
        public readonly Synoptic.Node node;
        public readonly bool textNode;

        public AbstractVector pos;

        public ExtendedNodeData(Synoptic.Node node, bool textNode) : base()
        {
            this.node = node;
            this.textNode = textNode;
        }
    }

    internal class Renderer : AbstractRenderer
    {
        public AbstractVector min = FDGVector2.Zero();
        public AbstractVector max = FDGVector2.Zero();

        public List<Edge> edges;
        public List<Node> nodes;

        public Renderer(IForceDirected iForceDirected) : base(iForceDirected)
        {
            edges = new List<Edge>();
            nodes = new List<Node>();
        }

        public override void Clear()
        {
            min = FDGVector2.Zero();
            max = FDGVector2.Zero();

            edges = new List<Edge>();
            nodes = new List<Node>();
        }


        protected override void drawEdge(Edge iEdge, AbstractVector iPosition1, AbstractVector iPosition2)
        {
            ((ExtendedEdgeData)iEdge.Data).from = iPosition1;
            ((ExtendedEdgeData)iEdge.Data).to = iPosition2;
            edges.Add(iEdge);

            if (iPosition1.x > max.x) max.x = iPosition1.x;
            if (iPosition1.x < min.x) min.x = iPosition1.x;
            if (iPosition1.y > max.y) max.y = iPosition1.y;
            if (iPosition1.y < min.y) min.y = iPosition1.y;

            if (iPosition2.x > max.x) max.x = iPosition2.x;
            if (iPosition2.x < min.x) min.x = iPosition2.x;
            if (iPosition2.y > max.y) max.y = iPosition2.y;
            if (iPosition2.y < min.y) min.y = iPosition2.y;
        }

        protected override void drawNode(Node iNode, AbstractVector iPosition)
        {
            if (iNode.Data is ExtendedNodeData)
            {
                ((ExtendedNodeData)iNode.Data).pos = iPosition;

                nodes.Add(iNode);

                if (iPosition.x > max.x) max.x = iPosition.x;
                if (iPosition.x < min.x) min.x = iPosition.x;
                if (iPosition.y > max.y) max.y = iPosition.y;
                if (iPosition.y < min.y) min.y = iPosition.y;
            }
        }
    };
}
