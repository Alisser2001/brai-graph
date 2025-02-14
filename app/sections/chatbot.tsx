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
import { useRouter } from "next/navigation";

export const Chatbot: FC = () => {
    const { status, error, messages, input, submitMessage, handleInputChange, threadId } = useAssistant({ api: '/api/assistant' });
    const router = useRouter();
    const { setNodes, setEdges } = useStore();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (threadId) router.push(`?threadId=${threadId}`);
    }, [threadId, router]);
    useEffect(() => {
        if (error) toast.error(error.message)
    }, [error])
    useEffect(() => {
        if (messages.length === 0) return;
        const lastMessage = messages[messages.length - 1].content;
        let lastJsonMessage;
        try {
            lastJsonMessage = JSON.parse(lastMessage);
        } catch {
            return;
        }
        try {
            const { nodes, edges } = validateAndConvert(lastJsonMessage);
            if (nodes.length > 0) setNodes(nodes);
            if (edges.length > 0) setEdges(edges);
            toast.success("El gráfo fue creado exitosamente.")
        } catch (error) {
            console.log(error);
            toast.error("El JSON no tiene una estructura válida.");
        }
    }, [messages, setEdges, setNodes]);
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