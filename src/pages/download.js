import React from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import AgGrid from '../components/ag-grid.js'
import DonutChart from '../components/donutChart.js'
import BarChart from '../components/barChart.js'
import './style.css';
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import DonutChart_google from "../components/donutChart_google.tsx";
import BarChart_google from "../components/barChart_google.tsx";
import Filter from "../components/filter.js";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const colourOptions = [
  { value: "ocean1", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" }
];

const Download = () => {


  return (
    <>
    <div className="rowC">
      <div className='sidebar'>
        <div style={{backgroundColor: '#254A61'}}>
          <h2 style={{color:'white', textAlign:'center', alignItems:'center'}}>FILTER</h2>
        </div>
        <Filter />
      </div>
      <div className="charts">
        <BarChart_google />
        <DonutChart_google />
      </div>
    </div>
    <AgGrid />
      </>

  );
};
  
export default Download;