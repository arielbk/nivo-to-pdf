import React, { useRef } from "react";
import BarGraph from "./BarGraph";
import { svgToPdf } from "./utils";

export default function Exportable() {
  const containerRef = useRef();

  const handleExport = () => svgToPdf(containerRef.current);

  return (
    <div style={{ width: 500, height: 500 }} ref={containerRef}>
      <BarGraph />
      <button onClick={handleExport}>export!</button>
    </div>
  );
}
