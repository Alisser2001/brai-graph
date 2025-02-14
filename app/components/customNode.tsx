'use client';
import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

interface Props {
    data: {
        name: string,
        job: string
    }
} 

function CustomNode({ data }: Props) {
    return (
        <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400 w-[250px] h-auto">
            <Handle
                type="target"
                position={Position.Top}
                className="w-40 !bg-teal-500"
            />
            <div className="flex">
                <div className="ml-2">
                    <div className="text-lg font-bold">{data.name}</div>
                    <div className="text-gray-500">{data.job}</div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                className="w-40 !bg-teal-500"
            />
        </div>
    );
}

export default memo(CustomNode);