import { Handle, Position } from 'react-flow-renderer';
export default function GameObject({ data }: any) {
    return (
        <div className="node_base_components" style={{

        }}>
            <Handle
                type="target"
                position={Position.Left}
            />
            <div>
                <h3>GameObject</h3>{data.label}</div>
            <Handle
                type="source"
                position={Position.Right}
            />
        </div>
    );
};