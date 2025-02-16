import dagre from 'dagrejs';
import { GraphEdge, GraphNode } from '../types/graph';

const nodeWidth = 250;
const nodeHeight = 130;
export function transformGraph(direction: string, nodes: GraphNode[], edges: GraphEdge[]) {
    const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({ rankdir: direction });
    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });
    dagre.layout(dagreGraph);
    const newNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        const newNode = {
            ...node,
            position: {
                x: nodeWithPosition.x - nodeWidth / 2,
                y: nodeWithPosition.y - nodeHeight / 2,
            }
        };
        return newNode;
    });
    return { nodes: newNodes, edges };
}