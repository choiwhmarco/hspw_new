import React from 'react';
import Cluster from '../components/cluster_table';
import Chart from 'react-google-charts';
import main_feature from '../components/hero.jpeg'
import './style.css'
import MultilineChart from "../components/MultilineChart.js";


const mystyle = {
    color: "white",
    marginTop:'10px',
    marginLeft:'20px',
    textAlign:'left',
    fontSize:'20px',
    marginBottom:'10px',

};
  
export const data = [
    ["Number of Members", "# of Members","Frequency","ID",'size'],
    ["2",2, Math.log(119)+5,119,Math.log(119)],
    ["3",3, Math.log(62)+5,62,Math.log(62)],
    ["4",4, Math.log(39)+5,39,Math.log(39)],
    ["5",5,Math.log(22)+5,22,Math.log(22)],
    ["6",6,Math.log(13)+5,13,Math.log(13)],
    ["7",7,Math.log(13)+5,13,Math.log(13)],
    ["8",8,Math.log(9)+5,9,Math.log(9)],
    ["9",9,Math.log(6)+5,6,Math.log(6)],
    ["≥10",10,Math.log(33)+5,33,Math.log(33)],
  ];
  
  

  export const options = {
    legend: {
      position: "none"
    },
    titlePosition:'none',
  hAxis:{title:"Number of Members"},
  vAxis:{title:"Frequency"},
  bubble: { textStyle: { fontSize: 11 } },
  };
  

const Protein_Cluster = () => {
  return (
    <>
    <div style={{height: '40%',backgroundImage: `url(${main_feature})`,paddingBottom:'10px'}}>
      <h1 style={{color:'white',textAlign:'center',display:'left',marginLeft:'20px',marginBottom:'1rem'}} align="left">Protein Cluster</h1>
      <p style={{textAlign:'left', color:'white',fontSize:'20px', paddingBottom:'15px', marginLeft:'20px',marginRight:'20px'}}>A protein cluster in the Human Salivary Proteome Project consists of protein identifications matching identical peptide lists. Each cluster contains at least one unique peptide not found in the other clusters.</p>
      <p style={{textAlign:'left', color:'white',fontSize:'20px', paddingBottom:'15px', marginLeft:'20px',marginRight:'20px'}}>The representative protein within a cluster is chosen by applying the following steps sequentially:</p>
      <ol style={mystyle}>
            <li style={mystyle}>
                The protein reported by the maximum number of research groups.
            </li>
            <li style={mystyle}>
                The protein with the highest number of distinct peptide hits.
            </li>
            <li style={mystyle}>
                The protein with a well-defined description in the IPI database or is cross-referenced to the Swiss-Prot database.
            </li>
            <li style={mystyle}>
                The protein with the lowest IPI accession number.
            </li>
        </ol>
        <p style={mystyle}>Add a new protein cluster entry <a href="" className='linksa'>here</a>.</p>
    </div>
    <h2 style={{textAlign:'center',marginTop:'20px'}}>Cluster Size</h2>
    <Chart
            chartType="BubbleChart"
            width="1200px"
            height="600px"
            data={data}
            options={options}
            style={{display: 'block', marginLeft: 'auto', marginRight: 'auto',paddingBottom:'20px'}}
        />
        <MultilineChart />
    <Cluster /></>
  );
};
  
export default Protein_Cluster;