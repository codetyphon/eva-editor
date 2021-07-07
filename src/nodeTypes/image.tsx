import { Handle, Position } from 'react-flow-renderer';
export default function Image({ data }: any) {
    return (
        <div className="node_base_components" style={{

        }}>
            <div>
                <h4>Image</h4>{data.label}</div>
            <Handle
                type="source"
                position={Position.Right}
            />
        </div>
    );
};