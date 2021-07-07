import { Handle, Position } from 'react-flow-renderer';
export default function Config({ data }: any) {
    return (
        <div className="node_base_components" style={{

        }}>
            <div>
                <h2>Config</h2>{data.label}</div>
            <Handle
                type="source"
                position={Position.Right}
            />
        </div>
    );
};