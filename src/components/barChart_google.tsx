import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Tissue",
    "Number of Samples",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Submandibular gland", 165,"blue", null],
  ["Sublingual gland", 155,"blue", null],
  ["Parotid gland", 345,"blue",  null],
  ["Whole Saliva", 344,"blue",null],
  ["Blood Plasma", 50,"blue",null],
];

export const options = {
  title: "Fluid Types",
  width: 550,
  height: 250,
  bar: { groupWidth: "45%" },
  legend: { position: "none" },
  titlePosition:'out',
  titleTextStyle:{
    fontSize:'18',
    bold:true,
  }
};

export function barChart_google() {
  return (
    <Chart
      chartType="BarChart"
      width="500px"
      height="250px"
      data={data}
      options={options}
    />
  );
}

export default barChart_google;