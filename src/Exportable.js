import React, { useRef } from "react";
import BarGraph from "./BarGraph";

// util to download as file
function download(href, name) {
  const link = document.createElement("a");
  link.download = name;
  link.style.visibility = "hidden";
  link.href = href;
  link.click();
  link.remove();
}

export default function Exportable() {
  const canvasRef = useRef();

  const handleExport = () => {
    const png = canvasRef.current?.toDataURL();
    download(png, "export.png");
  };

  return (
    <div style={{ width: 500, height: 500 }}>
      <BarGraph forwardRef={canvasRef} />
      <button onClick={handleExport}>export!</button>
    </div>
  );
}
