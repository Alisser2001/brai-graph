'use client';
import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { createPortal } from "react-dom";
import { JobIcon } from './icons/jobIcon';
import { LocationIcon } from './icons/locationIcon';
import { CalendarIcon } from './icons/calendarIcon';
import { MailIcon } from './icons/mailIcon';

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

function CustomNode({ data }: Props) {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <div className='shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] rounded-md w-[250px] h-[130px] overflow-hidden'>
                    <Handle
                        type="target"
                        position={Position.Top}
                        className="w-40 !bg-teal-500"
                    />
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <section className="text-2xl font-bold h-[50px] flex w-full justify-center items-center bg-teal-500 text-white">{data.name}</section>
                        <div className="text-gray-600 w-full bg-white flex flex-col justify-start items-center h-[100px] px-2">
                            <section className='w-full h-[40px] flex flex-row justify-start items-center'>
                                <JobIcon />
                                <p className='ml-2 text-center truncate'>{data.job}</p>
                            </section>
                            <section className='w-full h-[40px] flex flex-row justify-start items-center'>
                                <LocationIcon />
                                <p className='ml-2 text-center truncate'>{data.department} - {data.location}</p>
                            </section>
                        </div>
                    </div>
                    <Handle
                        type="source"
                        position={Position.Bottom}
                        className="w-40 !bg-teal-500"
                    />
                </div>
            </HoverCardTrigger>
            {createPortal(<HoverCardContent className='bg-white z-50 w-auto h-auto rounded-md p-0 overflow-hidden shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)]'>
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
            </HoverCardContent>, document.body)}
        </HoverCard>
    );
}

export default memo(CustomNode);