'use client';
import { FC } from 'react';
import { ReactFlow, Background, BackgroundVariant, ConnectionLineType, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useStore } from '../hooks/useStore';
import CustomNode from '../components/customNode';

const nodeTypes = {
    custom: CustomNode,
};
export const GraphContainer: FC = () => {
    const { getLayoutedElements } = useStore();
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements();
    return (
        <ReactFlow nodeTypes={nodeTypes} nodes={layoutedNodes} edges={layoutedEdges} connectionLineType={ConnectionLineType.SmoothStep} fitView className='bg-[#F7F9FB]' >
            <Background variant={BackgroundVariant.Dots} />
            <MiniMap nodeStrokeWidth={3} position='top-right' />
        </ReactFlow>
    )
}