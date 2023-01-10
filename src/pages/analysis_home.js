import React from 'react';
import Analysis_Home from '../components/card_analysis'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import { ListItemText, Typography,ListItem } from '@mui/material';
import main_feature from '../components/main-featured.png'
import {images} from '../components/CarouselData.js'
import { blue } from '@material-ui/core/colors';
  
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1976d2' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: '#1976d2',
  border: "1px",
}));

const Blogs = () => {
  return (
    <><div style={{height: '100%', width: '100%'}}>
      <div style={{height: '30%',backgroundImage: `url(${main_feature})`}}>
        <h1 style={{color:'white',textAlign:'left',display:'left'}} align="left">Analysis</h1>
        <p style={{display:'center', color:'white',fontSize:'25px'}}>Analysis will identify proteins with differential abundance between experiments in Groups A and B based on their normalized spectral counts.</p>
    </div>
    </div><Analysis_Home /></>
  );
};
  
export default Blogs;