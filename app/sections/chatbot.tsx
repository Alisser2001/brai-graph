'use client';
import { FC, useState } from "react";
import { useChat } from '@ai-sdk/react';
import { ChatbotIcon } from "../components/chatbotIcon";
import { ChatbotHead } from "../components/chatbotHead";
import { ScrollAreaCont } from "../components/shad-ui/scrollArea";
import { ChatbotTextArea } from "../components/chatbotTextArea";

export const Chatbot: FC = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({});
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {isOpen ?
                <section className="flex flex-col justify-between items-center absolute right-[20px] bottom-[20px] w-[450px] h-[600px] rounded-lg overflow-hidden border border-solid border-[rgba(0,0,0,0.16)] pb-4">
                    <ChatbotHead isOpen={isOpen} setIsOpen={setIsOpen} />
                    <ScrollAreaCont messages={messages} />
                    <ChatbotTextArea handleSubmit={handleSubmit} input={input} handleInputChange={handleInputChange} />
                </section> : <ChatbotIcon isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    )
}