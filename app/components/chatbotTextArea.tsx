'use client';
import { ChangeEvent, FC } from "react";
import { SendIcon } from "./icons/sendIcon";

interface Props {
    handleSubmit: () => void,
    input: string,
    status: string,
    handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
}

export const ChatbotTextArea: FC<Props> = ({ handleSubmit, input, status, handleInputChange }) => {
    return (
        <form
            className="w-[93%] flex flex-row justify-between items-center h-[50px] pl-3 pr-2 py-2 rounded-full overflow-hidden border border-solid border-[rgba(0,0,0,0.16)]"
            onSubmit={handleSubmit}
        >
            <input
                type='text'
                className="border-none outline-none focus:ring-0 w-[90%]"
                placeholder="Ask a question..."
                name="prompt"
                disabled={status !== 'awaiting_message'}
                value={input}
                onChange={handleInputChange} />
            <button type="submit" className="bg-[#1bb883] text-white rounded-full p-2">
                <SendIcon />
            </button>
        </form>
    )
}