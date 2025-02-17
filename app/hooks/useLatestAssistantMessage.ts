import { useEffect, useRef } from "react";
import { useStore } from "../hooks/useStore";
import { toast } from 'sonner';
import { extractJsonFromMessage } from "../utils/extractJsonFromMessage";
import { validateAndConvert } from "../utils/validateJson";
import { Message } from "ai";

export const useLatestAssistantMessage = (messages: Message[]) => {
    console.log(messages)
    const { setNodes, setEdges } = useStore();
    const lastMessageRef = useRef<string | null>(null);
    useEffect(() => {
        if (!messages || messages.length === 0) return;
        const lastAssistantMessage = [...messages].reverse().find(msg => msg.role === "assistant")?.content;
        if (!lastAssistantMessage || lastAssistantMessage === lastMessageRef.current) return;
        lastMessageRef.current = lastAssistantMessage; 
        const jsonString = extractJsonFromMessage(lastAssistantMessage);
        if (!jsonString) return;
        try {
            const parsedJson = JSON.parse(jsonString);
            const { nodes, edges } = validateAndConvert(parsedJson);
            if (nodes.length > 0 || edges.length > 0) {
                setNodes(nodes);
                setEdges(edges);
                toast.success("El gráfo fue creado exitosamente.");
            }
        } catch {
            toast.error("El JSON no tiene una estructura válida.");
        }
    }, [messages, setNodes, setEdges]);
};
