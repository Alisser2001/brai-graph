'use client';
import { BotIcon } from "./icons/botIcon";
import { FC } from "react";

interface Props {
    isOpen: boolean,
    setIsOpen: (option: boolean) => void
}

export const ChatbotButton: FC<Props> = ({ isOpen, setIsOpen }) => {
    return (
        <span className="absolute right-[20px] bottom-[20px] flex justify-center items-center rounded-full bg-[#1bb883] w-16 h-16 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <BotIcon/>
        </span>
    )
}