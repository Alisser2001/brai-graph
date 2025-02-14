import { create } from 'zustand';
import { State, Actions } from '../types/store';
import dagre from 'dagrejs';
import { GraphNode, GraphEdge } from '../types/graph';

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';
const nodeWidth = 172;
const nodeHeight = 36;
export const useStore = create<State & Actions>((set, get) => ({
    nodes: [],
    edges: [],

    getLayoutedElements: (direction = 'TB') => {
        const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
        dagreGraph.setGraph({ rankdir: direction });
        const { nodes, edges } = get();
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
                },
            };
            return newNode;
        });
        return { nodes: newNodes, edges };
    },
    setNodes: (nodes: GraphNode[]) => {
        try {
            set((state) => ({
                ...state,
                nodes: nodes,
            }));
        } catch (err) {
            set((state) => ({
                ...state
            }));
        }
    },
    setEdges: (edges: GraphEdge[]) => {
        try {
            set((state) => ({
                ...state,
                edges: edges,
            }));
        } catch (err) {
            set((state) => ({
                ...state
            }));
        }
    }
}));