import { GraphEdge, GraphNode } from "./graph";

export type Assistant = 'clown' | 'philosopher';

export interface State {
    nodes: GraphNode[],
    edges: GraphEdge[],
    assistantType: Assistant
}

export interface Actions {
    getLayoutedElements: (direction?: 'TB' | 'BT' | 'LR' | 'RL') => {
        nodes: GraphNode[];
        edges: GraphEdge[];
    };
    setNodes: (nodes: GraphNode[]) => void;
    setEdges: (edges: GraphEdge[]) => void;
    setAssistantType: (assistant: Assistant) => void;
}