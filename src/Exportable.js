import React, { useRef } from "react";
import { download, canvasToPdf } from "./utils";
import BarGraph from "./BarGraph";

export default function Exportable() {
  const canvasRef = useRef();

  const handleExport = () => canvasToPdf(canvasRef.current);

  return (
    <div style={{ width: 500, height: 500 }}>
      <BarGraph forwardRef={canvasRef} />
      <button onClick={handleExport}>export!</button>
    </div>
  );
}
