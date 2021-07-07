import { Handle, Position } from 'react-flow-renderer';
export default function Game({ data }: any) {
    return (
        <div className="node_base_components" style={{

        }}>
            <div>
                <h2>Game</h2>{data.label}</div>
            <Handle
                type="target"
                position={Position.Left}
            />
        </div>
    );
};