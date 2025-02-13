'use client';
import { FC } from "react";

interface Props {
    isOpen: boolean,
    setIsOpen: (option: boolean) => void
}

export const ChatbotHead: FC<Props> = ({ isOpen, setIsOpen }) => {
    return (
        <div className="w-full flex flex-row justify-between items-center h-[60px] bg-[rgba(0,0,0,0.06)] px-5">
            <h1>Chat Assistant</h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </svg>
        </div>
    )
}