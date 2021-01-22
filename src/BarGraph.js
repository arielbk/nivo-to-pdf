import React from "react";
// import { ResponsiveBarCanvas } from "@nivo/bar";
import { Bar } from "@nivo/bar";
import { generateCountriesData } from "@nivo/generators";

const keys = ["small", "medium", "large", "x large"];

export default function BarGraph({ forwardRef }) {
  return (
    <Bar
      className="barGraph"
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
      // groupMode="grouped"
      enableGridY={false}
      enableGridX={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 80,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
}
