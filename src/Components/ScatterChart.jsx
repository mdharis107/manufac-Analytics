import EChartsReact from "echarts-for-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";

const ScatterChart = () => {
  const [chartData, setChartData] = useState([]);
  const [chartData1, setChartData1] = useState([]);

  useEffect(() => {
    let addData = [];
    let addData1 = [];

    for (var i = 0; i < data.length; i++) {
      addData.push(data[i].Color_intensity);
      addData1.push(data[i].Hue);
    }
    // console.log(addData)
    setChartData(addData);
    setChartData1(addData1);
  }, []);
  // console.log(chartData);
  // console.log(chartData1);

  return (
    <>
      {/* Link to go back to Home Page */}
      <div style={{ textAlign: "left", width: "75%", margin: "auto" }}>
        <Link to="/">
          <h1>Back</h1>
        </Link>
      </div>
      <div style={{ color: "blue" }}>
        <h1>Scatter Chart</h1>
      </div>

      {/* Chart Section */}
      <EChartsReact
        key={Date.now()}
        option={{
          title: {
            text: "Alcohol and Malic Acid",
          },
          theme: "night",
          grid: { top: 8, right: 8, bottom: 24, left: 36 },
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          dataZoom: {
            show: false,
            start: 50,
            end: 100,
          },
          legend: {
            data: ["Hue"],
          },
          
          grid: { top: 60, left: 30, right: 60, bottom: 30 },
          xAxis: [
            {
              name: "Color Intensity",
              type: "value",
              scale: true,
              // max: 15,
              min: 0,
            },
          ],
          yAxis: [
            {
              scale: true,
              name: "Hue",
              type: "value",
              scale: true,
              min: 0,
            },
          ],
          series: [
            {
              name: "Hue",
              type: "scatter",
              data: chartData,
              itemStyle: {
                normal: {
                  barBorderRadius: 2,
                },
              },
            },
            {
              name: "Color Intensity",
              type: "scatter",
              data: chartData1,
              itemStyle: {
                normal: {
                  barBorderRadius: 2,
                },
              },
            },
          ],
        }}
        //Css for the Chart
        style={{ width: "85%", margin: "auto", height: 400, marginTop: "10%" }}
      />
    </>
  );
};

export default ScatterChart;
