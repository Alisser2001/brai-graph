'use client';
import { FC } from "react";

interface Props {
    isOpen: boolean,
    setIsOpen: (option: boolean) => void
}

export const ChatbotIcon: FC<Props> = ({ isOpen, setIsOpen }) => {
    return (
        <span className="absolute right-[20px] bottom-[20px] flex justify-center items-center rounded-full bg-black w-16 h-16 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
            >
                <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                <path d="M12 2v2" />
                <path d="M9 12v9" />
                <path d="M15 12v9" />
                <path d="M5 16l4 -2" />
                <path d="M15 14l4 2" />
                <path d="M9 18h6" />
                <path d="M10 8v.01" />
                <path d="M14 8v.01" />
            </svg>
        </span>
    )
}