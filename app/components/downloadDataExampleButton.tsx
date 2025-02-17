'use client';
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { downloadJson } from "../utils/downloadJson";

export const DownloadDataExampleButton: FC = () => {
    
    return (
        <Button
            className="absolute left-3 top-3 z-50 bg-[#1bb883] text-white hover:bg-white hover:text-[#1bb883] border-2 border-solid border-[#1bb883] cursor-pointer"
            onClick={downloadJson}>
            Download Json Example
        </Button>
    )
}