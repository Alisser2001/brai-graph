'use client';
import { ChangeEvent, FC } from "react";

interface Props {
    handleSubmit: () => void,
    input: string,
    handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
}

export const ChatbotTextArea: FC<Props> = ({ handleSubmit, input, handleInputChange }) => {
    return (
        <form
            className="w-[93%] flex flex-row justify-between items-center h-[50px] px-3 py-2 rounded-full overflow-hidden border border-solid border-[rgba(0,0,0,0.16)]"
            onSubmit={handleSubmit}
        >
            <input
                type='text'
                className="border-none outline-none focus:ring-0 w-[90%]"
                placeholder="Ask a question..."
                name="prompt"
                value={input}
                onChange={handleInputChange} />
            <button type="submit">
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
                >
                    <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                    <path d="M6.5 12h14.5" />
                </svg>
            </button>
        </form>
    )
}