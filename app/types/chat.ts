export type GraphInputNode = {
    id: string;
    metadata: {
        name: string;
        job: string;
    };
    connections: string[];
};