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
import { extractJsonFromMessage } from "../utils/extractJsonFromMessage";

export const Chatbot: FC = () => {
    const { setNodes, setEdges, assistantType } = useStore();
    const { status, error, messages, input, submitMessage, handleInputChange, threadId } = useAssistant({ api: '/api/assistant', body: { assistant: assistantType } });
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (threadId) router.push(`?threadId=${threadId}`);
    }, [threadId, router]);

    useEffect(() => {
        if (error) toast.error(error.message);
    }, [error]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const jsonString = extractJsonFromMessage(input);
        if (!jsonString) {
            submitMessage(event);
            return;
        }
        handleInputChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
        try {
            const parsedJson = JSON.parse(jsonString);
            const { nodes, edges } = validateAndConvert(parsedJson);
            if (nodes.length > 0 || edges.length > 0) {
                setNodes(nodes);
                setEdges(edges);
                toast.success("El gráfo fue creado exitosamente.");
                return;
            }
        } catch {
            toast.error("El JSON no tiene una estructura válida.");
            return;
        }
    };

    return (
        <>
            {isOpen ?
                <section className="flex flex-col justify-between items-center absolute z-10 bottom-[10px] m-3 md:right-[20px] md:bottom-[20px] w-[90%] md:w-[450px] h-[600px] rounded-lg overflow-hidden border border-solid border-[rgba(0,0,0,0.16)] pb-4 bg-white">
                    <ChatbotHead isOpen={isOpen} setIsOpen={setIsOpen} />
                    <ScrollAreaCont messages={messages} />
                    <ChatbotTextArea handleSubmit={(e) => handleSubmit(e)} status={status} input={input} handleInputChange={handleInputChange} />
                </section> :
                <ChatbotIcon isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    )
}