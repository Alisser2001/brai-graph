export type GraphInputNode = {
    id: string;
    metadata: {
        name: string;
        job: string;
        department: string;
        email: string;
        location: string;
        description: string;
        hire_date: string;
    };
    connections: string[];
};
