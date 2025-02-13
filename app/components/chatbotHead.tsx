'use client';
import { FC } from "react";
import { CloseIcon } from "./icons/closeIcon";

interface Props {
    isOpen: boolean,
    setIsOpen: (option: boolean) => void
}

export const ChatbotHead: FC<Props> = ({ isOpen, setIsOpen }) => {
    return (
        <div className="w-full flex flex-row justify-between items-center h-[60px] bg-[rgba(0,0,0,0.06)] px-5">
            <h1>Chat Assistant</h1>
            <CloseIcon setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
    )
}