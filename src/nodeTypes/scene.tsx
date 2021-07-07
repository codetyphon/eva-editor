import { Handle, Position } from 'react-flow-renderer';
export default function Scene({ data }: any) {
    return (
        <div className="node_base_components" style={{

        }}>
            <Handle
                type="target"
                position={Position.Left}
            />
            <div>
                <h2>Scene</h2>{data.label}</div>
            <Handle
                type="source"
                position={Position.Right}
            />
        </div>
    );
};