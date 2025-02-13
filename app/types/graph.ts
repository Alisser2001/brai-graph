type NodePosition = {
    x: number;
    y: number;
};

type NodeData = {
    label: string;
};

export type GraphNode = {
    id: string;
    position: NodePosition;
    data: NodeData;
};

export type GraphEdge = {
    id: string;
    source: string;
    target: string;
    type: string;
    animated: boolean
};