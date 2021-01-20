import React, { useRef } from "react";
import BarGraph from "./BarGraph";

export default function Canvas() {
  const svgRef = useRef();

  console.log(svgRef.current);
  return <BarGraph forwardRef={svgRef} />;
}
