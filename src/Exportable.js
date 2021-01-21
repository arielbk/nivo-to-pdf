import React, { useRef } from "react";
import { download, canvasToPdf, svgToCanvas } from "./utils";
import BarGraph from "./BarGraph";

export default function Exportable() {
  const containerRef = useRef();

  // const handleExport = () => canvasToPdf(containerRef.current);
  const handleExport = () => {
    svgToCanvas(containerRef.current.querySelector("svg"));
  };

  // console.log(containerRef.current);
  return (
    <div style={{ width: 500, height: 500 }} ref={containerRef}>
      <BarGraph />
      <button onClick={handleExport}>export!</button>
    </div>
  );
}
