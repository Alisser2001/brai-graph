import { create } from 'zustand';
import { State, Actions } from '../types/store';
import { GraphNode, GraphEdge } from '../types/graph';
import { transformGraph } from '../utils/transformGraph';

export const useStore = create<State & Actions>((set, get) => ({
    nodes: [],
    edges: [],

    getLayoutedElements: (direction = 'TB') => {
        const { nodes, edges } = get();
        return transformGraph(direction, nodes, edges);
    },
    setNodes: (nodes: GraphNode[]) => {
        try {
            set((state) => ({
                ...state,
                nodes: nodes,
            }));
        } catch (err) {
            console.log(err);
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
            console.log(err);
            set((state) => ({
                ...state
            }));
        }
    }
}));