'use client';
import { FC } from 'react';
import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export const GraphContainer: FC = () => {
    const initialNodes = [
        { id: '1', position: { x: 400, y: 400 }, data: { label: '1' } },
        { id: '2', position: { x: 500, y: 500 }, data: { label: '2' } },
    ];
    const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
    return (
        <ReactFlow defaultNodes={initialNodes} defaultEdges={initialEdges}>
            <Background color="#ccc" variant={BackgroundVariant.Dots} className='justify-center items-center'/>
        </ReactFlow>
    )
}