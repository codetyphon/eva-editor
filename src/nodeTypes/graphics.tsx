import { Handle, Position } from 'react-flow-renderer';
export default function Graphics({ data }: any) {
    return (
        <div className="node_base_components" style={{

        }}>
            <div>
                <h4>Graphics</h4>{data.label}</div>
            <Handle
                type="source"
                position={Position.Right}
            />
        </div>
    );
};