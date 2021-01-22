import React, { useRef } from "react";
import { canvasToPdf, svgToPng } from "./utils";
import BarGraph from "./BarGraph";
import download from "downloadjs";

export default function Exportable() {
  const containerRef = useRef();

  // const handleExport = () => canvasToPdf(containerRef.current);
  const handleExport = async () => {
    const png = svgToPng(containerRef.current);
    download(png);
  };

  // console.log(containerRef.current);
  return (
    <div style={{ width: 500, height: 500 }} ref={containerRef}>
      <BarGraph />
      <button onClick={handleExport}>export!</button>
    </div>
  );
}
