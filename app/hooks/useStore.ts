import { create } from 'zustand';
import { State, Actions } from '../types/store';
import dagre from 'dagrejs';

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';
const nodeWidth = 172;
const nodeHeight = 36;
export const useStore = create<State & Actions>((set, get) => ({
    nodes: [
        { id: '1', data: { label: 'A' }, position },
        { id: '2', data: { label: 'B' }, position },
        { id: '3', data: { label: 'C' }, position },
        { id: '4', data: { label: 'D' }, position },
        { id: '5', data: { label: 'E' }, position },
        { id: '6', data: { label: 'F' }, position },
        { id: '7', data: { label: 'G' }, position },
        { id: '2a', data: { label: 'B1' }, position },
        { id: '2b', data: { label: 'B2' }, position },
        { id: '2c', data: { label: 'B3' }, position },
        { id: '2d', data: { label: 'B4' }, position },
    ],
    edges: [
        { id: 'e12', source: '1', target: '2', type: edgeType, animated: true },
        { id: 'e13', source: '1', target: '3', type: edgeType, animated: true },
        { id: 'e22a', source: '2', target: '2a', type: edgeType, animated: true },
        { id: 'e22b', source: '2', target: '2b', type: edgeType, animated: true },
        { id: 'e22c', source: '2', target: '2c', type: edgeType, animated: true },
        { id: 'e2c2d', source: '2c', target: '2d', type: edgeType, animated: true },
        { id: 'e45', source: '4', target: '5', type: edgeType, animated: true },
        { id: 'e56', source: '5', target: '6', type: edgeType, animated: true },
        { id: 'e57', source: '5', target: '7', type: edgeType, animated: true },
    ],
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
    }
}));

