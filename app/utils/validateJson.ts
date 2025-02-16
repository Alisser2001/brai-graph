import { GraphInputNode } from "../types/chat";
import { GraphEdge, GraphNode } from "../types/graph";

interface Props {
    nodes: GraphInputNode[]
}

export function validateAndConvert(inputJson: Props) {
    const position = { x: 0, y: 0 };
    const edgeType = 'smoothstep';
    if (!inputJson.nodes || !Array.isArray(inputJson.nodes)) {
        throw new Error("Formato incorrecto: 'nodes' debe ser un array.");
    }
    const nodes: GraphNode[] = [];
    const edges: GraphEdge[] = [];
    const edgeSet = new Set();
    try {
        inputJson.nodes.forEach((node: GraphInputNode) => {
            nodes.push({
                id: node.id,
                data: {
                    name: node.metadata.name,
                    job: node.metadata.job,
                    location: node.metadata.location,
                    department: node.metadata.department,
                    email: node.metadata.email,
                    description: node.metadata.description,
                    hire_date: node.metadata.hire_date
                },
                position: position,
                type: 'custom',
            })
        });
        inputJson.nodes.forEach((node: GraphInputNode) => {
            node.connections.forEach((targetId: string) => {
                const edgeKey = node.id < targetId ? `${node.id}-${targetId}` : `${targetId}-${node.id}`;
                if (!edgeSet.has(edgeKey)) {
                    edgeSet.add(edgeKey);
                    edges.push({
                        id: `e${edgeKey}`,
                        source: node.id,
                        target: targetId,
                        type: edgeType,
                        animated: true
                    });
                }
            });
        });
    } catch (error) {
        throw new Error((error as Error).message);
    }
    return { nodes, edges };
}