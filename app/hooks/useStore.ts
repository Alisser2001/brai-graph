import { create } from 'zustand';
import { State, Actions, Assistant } from '../types/store';
import { GraphNode, GraphEdge } from '../types/graph';
import { transformGraph } from '../utils/transformGraph';

export const useStore = create<State & Actions>((set, get) => ({
    nodes: [],
    edges: [],
    assistantType: 'clown',

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
    },
    setAssistantType: (assistant: Assistant) => {
        try {
            set((state) => ({
                ...state,
                assistantType: assistant,
            }));
        } catch (err) {
            console.log(err);
            set((state) => ({
                ...state
            }));
        }
    }
}));