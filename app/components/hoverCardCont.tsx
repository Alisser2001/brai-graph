'use client';
import { FC } from "react";
import { HoverCardContent } from "@/components/ui/hover-card";
import { MailIcon } from "./icons/mailIcon";
import { CalendarIcon } from "./icons/calendarIcon";

interface Props {
    data: {
        name: string;
        job: string;
        department: string;
        email: string;
        location: string;
        description: string;
        hire_date: string;
    }
}

export const HoverCardCont: FC<Props> = ({ data }) => {
    return (
        <HoverCardContent className='bg-white z-50 w-auto h-auto rounded-md p-0 overflow-hidden shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)]'>
            <div className="text-gray-600 flex flex-col justify-start items-center p-3 max-w-[250px]">
                <section className='flex flex-row justify-start items-center w-full mb-2'>
                    <p className='text-start flex flex-row flex-wrap'>{data.description}</p>
                </section>
                <section className='flex flex-row justify-start items-center w-full mb-2'>
                    <MailIcon />
                    <p className='ml-2 text-start truncate'>{data.email}</p>
                </section>
                <section className='flex flex-row justify-start items-center w-full'>
                    <CalendarIcon />
                    <p className='ml-2 text-start truncate'>Joined {data.hire_date.split('-').reverse().join('/')}</p>
                </section>
            </div>
        </HoverCardContent>
    )
}