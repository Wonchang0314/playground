import { useState } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Background,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { DisplayPosition } from "./DisplayPosition";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const FlowContent = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { getViewport } = useReactFlow();
  const [viewport, setViewport] = useState(() => getViewport());

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onMove={(_, viewport) => setViewport(viewport)}
      onMoveStart={(_, viewport) => setViewport(viewport)}
      onMoveEnd={(_, viewport) => setViewport(viewport)}
    >
      <Background />
      <DisplayPosition x={viewport.x} y={viewport.y} zoom={viewport.zoom} />
    </ReactFlow>
  );
};

export const FlowPlayGround = () => {
  return (
    <ReactFlowProvider>
      <FlowContent />
    </ReactFlowProvider>
  );
};
