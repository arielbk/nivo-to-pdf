import React from "react";
import { Bar } from "@nivo/bar";
import { generateCountriesData } from "@nivo/generators";

const keys = ["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"];

export default function BarGraph({ forwardRef }) {
  console.log("bar renders");
  return (
    <Bar
      ref={forwardRef}
      width={900}
      height={500}
      margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
      data={generateCountriesData(keys, { size: 7 })}
      indexBy="country"
      keys={keys}
      padding={0.2}
      labelTextColor={"inherit:darker(1.4)"}
      labelSkipWidth={16}
      labelSkipHeight={16}
      layout="horizontal"
      enableGridY={false}
      enableGridX={true}
    />
  );
}
