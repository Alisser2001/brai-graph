'use client';
import { FC } from "react";
import { CloseIcon } from "./icons/closeIcon";
import { useStore } from "../hooks/useStore";
import { Assistant } from "../types/store";

interface Props {
    isOpen: boolean,
    setIsOpen: (option: boolean) => void
}

export const ChatbotHead: FC<Props> = ({ isOpen, setIsOpen }) => {
    const { assistantType, setAssistantType } = useStore();
    return (
        <div className="w-full flex flex-row justify-between items-center h-[60px] bg-[rgba(0,0,0,0.06)] px-5">
            <h1>Chat Assistant</h1>
            <section className="flex flex-row justify-between items-center"><select
                id="role"
                value={assistantType}
                onChange={(e) => setAssistantType(e.target.value as Assistant)}
                className="p-2 border rounded-md bg-white shadow-sm focus:ring focus:ring-[#1bb883] mr-3"
            >
                <option value="clown">Clown</option>
                <option value="philosopher">Philosopher</option>
            </select>
                <CloseIcon setIsOpen={setIsOpen} isOpen={isOpen} />
            </section>
        </div>
    )
}