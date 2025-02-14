import { GraphEdge, GraphNode } from "../types/graph";

export function validateAndConvert(jsonString: string) {
    let inputJson;
    try {
        inputJson = JSON.parse(jsonString);
    } catch (error) {
        throw new Error("El mensaje recibido no es un JSON válido.");
    }
    if (!inputJson.nodes || !Array.isArray(inputJson.nodes)) {
        throw new Error("Formato incorrecto: 'nodes' debe ser un array.");
    }
    let nodes: GraphNode[] = [];
    let edges: GraphEdge[] = [];
    let edgeSet = new Set();
    try {
        inputJson.nodes.forEach((node: any) => {
            nodes.push({
                id: node.id,
                data: { label: node.metadata.name },
                position: { x: 0, y: 0 }
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
                        type: "smoothstep",
                        animated: true
                    });
                }
            });
        });
    } catch (error) {
        throw new Error("El mensaje recibido no es un JSON válido.");
    }
    return { nodes, edges };
}