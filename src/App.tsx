import React, { useEffect, useState } from 'react';
import ReactFlow, { Handle, Position, Controls, removeElements, addEdge, Elements, Connection, Edge } from 'react-flow-renderer';
import './App.css';
import nodeTypes from './nodeTypes';
import Preview from './preview';
import PropertiesPanel from './propertiesPanel';
import { v4 as uuidv4 } from 'uuid';
import nodes from './nodes';

function App() {
  const [confs, setConfs] = useState<any[]>([])
  const [elements, setElements] = useState<any[]>([])
  const [id, setId] = useState<string>("")
  const [type, setType] = useState<string>("")
  const [fields, setFields] = useState<any[]>([])
  const onElementClick = (_event: any, node: any) => {
    console.log(node)
    const { id, type, data } = node
    const fields = data.fields || []
    console.log(id, type, fields)
    setId(id)
    setType(type)
    fields.map((field: any) => {
      return field.key = uuidv4()
    })
    setFields(fields)
  }

  const onElementsRemove = (elementsToRemove: Elements<any>) => {
    setElements((els) => removeElements(elementsToRemove, els));
  }

  const onConnect = (params: Edge<any> | Connection) => {
    setElements((els) => addEdge(params, els));
  }

  useEffect(() => {
    setElements(nodes)
  }, [])

  const update = (id: string, type: string, kv: any) => {
    console.log(id, type, kv)
    setConfs([
      {
        id, type, kv
      }
    ])
  }
  return (
    <div className="app">
      <Preview confs={confs} />
      <div className="canvas">
        <ReactFlow
          onElementClick={onElementClick}
          elements={elements}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          deleteKeyCode={46} /* 'delete'-key */
        >
          <Controls />
        </ReactFlow>
      </div>
      <PropertiesPanel id={id} type={type} fields={fields} update={update} />
    </div>

  );
}

export default App;
