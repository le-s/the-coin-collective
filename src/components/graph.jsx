import React from 'react';

import { Bar } from "@nivo/bar";

const Graph = ({items, data}) => {
  return (
    <div className="graph">
      <h1>Crypto Market</h1>
      <Bar
        data={items}
        keys={data}
        indexBy="name"
        width={900}
        height={540}
        margin={{ top: 10, right: 130, bottom: 70, left: 90 }}
        padding={0.3}
        innerPadding={2}
        groupMode="grouped"
        colors={{ scheme: "category10" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 35,
          legend: "Coin",
          legendPosition: "middle",
          legendOffset: 60
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 6,
          tickRotation: 35,
          legend: "Volume",
          legendPosition: "middle",
          legendOffset: -80
        }}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "#ffffff"
              }
            },
            legend: {
              text: {
                fill: "#aaaaaa",
                fontSize: "20px"
              }
            }
          }
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]]
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            itemTextColor: "#ffffff",
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
}

export default Graph;