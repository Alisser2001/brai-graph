type NodePosition = {
    x: number;
    y: number;
};

type NodeData = {
    name: string;
    job: string;
    department: string;
    email: string;
    location: string;
    description: string;
    hire_date: string;
};

export type GraphNode = {
    id: string;
    position: NodePosition;
    data: NodeData;
    type: string;
};

export type GraphEdge = {
    id: string;
    source: string;
    target: string;
    type: string;
    animated: boolean
};