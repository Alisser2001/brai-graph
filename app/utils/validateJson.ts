import { GraphEdge, GraphNode } from "../types/graph";

export function validateAndConvert(jsonString: string) {
    const position = { x: 0, y: 0 };
    const edgeType = 'smoothstep';
    let inputJson;
    try {
        inputJson = JSON.parse(jsonString);
    } catch (error) {
        throw new Error((error as Error).message);
    }
    if (!inputJson.nodes || !Array.isArray(inputJson.nodes)) {
        throw new Error("Formato incorrecto: 'nodes' debe ser un array.");
    }
    const nodes: GraphNode[] = [];
    const edges: GraphEdge[] = [];
    const edgeSet = new Set();
    try {
        inputJson.nodes.forEach((node: any) => {
            nodes.push({
                id: node.id,
                data: { label: node.metadata.name },
                position: position
            })
        });
        inputJson.nodes.forEach((node: any) => {
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