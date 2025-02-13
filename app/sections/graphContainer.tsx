'use client';
import { FC } from 'react';
import { ReactFlow, Background, BackgroundVariant, ConnectionLineType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useStore } from '../hooks/useStore';

export const GraphContainer: FC = () => {
    const { getLayoutedElements } = useStore();
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements();
    return (
        <ReactFlow nodes={layoutedNodes} edges={layoutedEdges} connectionLineType={ConnectionLineType.SmoothStep} fitView className='bg-[#F7F9FB]'>
            <Background variant={BackgroundVariant.Dots} />
        </ReactFlow>
    )
}