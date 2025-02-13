import { GraphEdge, GraphNode } from "./graph";

export interface State {
    nodes: GraphNode[],
    edges: GraphEdge[]
}

export interface Actions {
    getLayoutedElements: (direction?: 'TB' | 'BT' | 'LR' | 'RL') => {
        nodes: GraphNode[];
        edges: GraphEdge[];
    };
}