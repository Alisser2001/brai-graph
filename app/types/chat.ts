export type GraphInputNode = {
    id: string;
    metadata: {
        name: string;
        color: string;
        value: number;
    };
    connections: string[];
};