'use client';
import { FC, useState, useEffect } from "react";
import { useAssistant } from '@ai-sdk/react';
import { ChatbotIcon } from "../components/chatbotIcon";
import { ChatbotHead } from "../components/chatbotHead";
import { ScrollAreaCont } from "../components/shad-ui/scrollArea";
import { ChatbotTextArea } from "../components/chatbotTextArea";
import { validateAndConvert } from "../utils/validateJson";
import { useStore } from "../hooks/useStore";
import { toast } from 'sonner';

export const Chatbot: FC = () => {
    const { status, messages, input, submitMessage, handleInputChange } = useAssistant({ api: '/api/assistant' });
    const { setNodes, setEdges } = useStore();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1].content;
            try {
                const { nodes, edges } = validateAndConvert(lastMessage);
                nodes.length && setNodes(nodes);
                edges.length && setEdges(edges);
                toast.success("Grafo creado con el JSON enviado.")
            } catch (error) {
                console.log(error);
                toast.error("El último mensaje no es un JSON válido.");
            }
        }
    }, [messages]);
    return (
        <>
            {isOpen ?
                <section className="flex flex-col justify-between items-center absolute z-10 right-[20px] bottom-[20px] w-[450px] h-[600px] rounded-lg overflow-hidden border border-solid border-[rgba(0,0,0,0.16)] pb-4 bg-white">
                    <ChatbotHead isOpen={isOpen} setIsOpen={setIsOpen} />
                    <ScrollAreaCont messages={messages} />
                    <ChatbotTextArea handleSubmit={submitMessage} status={status} input={input} handleInputChange={handleInputChange} />
                </section> :
                <ChatbotIcon isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    )
}