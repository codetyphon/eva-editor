import 'rc-color-picker/assets/index.css';
import { Panel as ColorPickerPanel } from 'rc-color-picker';
import { useState } from 'react';
export default function Color({ onChange, value }: any) {
    const [color, setColor] = useState(value)
    const _onChange = (value: any) => {
        console.log(value.color)
        setColor(color)
        onChange(value.color)
    }
    return (
        <div style={{ padding:10 }}>
            <ColorPickerPanel enableAlpha={false} color={color} onChange={_onChange} mode="RGB" />
        </div>
    )
}