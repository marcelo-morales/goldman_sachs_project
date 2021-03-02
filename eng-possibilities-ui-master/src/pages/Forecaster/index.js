import Form from './form.js'
import React from "react";
import {VictoryAxis, VictoryChart, VictoryLabel, VictoryLine, VictoryTheme} from "victory";

const ForecasterHome = () => {
  const sampleData = [{x: "2021", y: 10000}, {x: "2022", y: 13100}, {x: "2023", y: 13800}, {x: "2024", y: 14600}, {x: "2025", y: 14100}, {x: "2026", y: 13900}, {x: "2027", y: 15000}, {x: "2028", y: 14900}, {x: "2029", y: 15100}, {x: "2030", y: 15300}, {x: "2031", y: 15800}];
  return (
    <>
       <div>
          <h3>Investment Forecaster</h3>
          <p>This page allows you to customize your investments and view the potential growth of <b>$10,000</b> over a period of <b>10 years</b>.</p>
        </div>
        <VictoryChart
          theme={VictoryTheme.material}
          width={700}
          height={250}
          padding={70}
        >
          <VictoryLabel text="Investment" x={350} y={30} textAnchor="middle"/>
          <VictoryLine
            style={{ data: { stroke: "lightblue" }}}
            data={sampleData}
          />
          <VictoryAxis
            label="Year"
            style={{
              axisLabel: { padding: 30 }
            }}
          />
        <VictoryAxis dependentAxis
          label="Value ($)"
          style={{
            axisLabel: { padding: 55 }
          }}
        />
        </VictoryChart>
      <div>
        <h4>Investment Allocations</h4>
      </div>
      <Form/>
    </>
  );
};

export default ForecasterHome;
