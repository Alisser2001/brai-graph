'use client';
import React, { FC } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TextPart {
    type: 'text';
    text: string;
}
type UIMessage = {
    role: "user" | "assistant" | "data" | "system",
    content: string | Array<TextPart>
};
interface ScrollAreaProps {
    messages: UIMessage[];
}

export const ScrollAreaCont: FC<ScrollAreaProps> = ({ messages }) => {
    return (
        <ScrollArea className="h-[480px] w-full">
            <div className="p-4">
                {messages.map((msg, idx) => {
                    return (
                        <span key={idx}>{msg.role}</span>
                    )
                })}
            </div>
        </ScrollArea>
    )
}
