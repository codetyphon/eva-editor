import { Handle, Position as P } from 'react-flow-renderer';
export default function Transform({ data }: any) {
    return (
        <div className="node_base_components" style={{

        }}>
            <div><h4>Transform</h4>{data.label}</div>
            <Handle
                type="source"
                position={P.Right}
            />
        </div>
    );
};