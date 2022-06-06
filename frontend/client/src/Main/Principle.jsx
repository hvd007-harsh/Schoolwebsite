import { Grid, Paper } from "@mui/material";
import React from "react";
import data from "../data/data";
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Principle =()=>{ return (
    <>
  
      <Grid container  justifyContent="center" spacing={0.5}>
        <Grid item xs={6} md={2} >
            <Item>
             <img className="imgPrinciple" src={data.principle[0].principlePhoto} alt="Principle"/>
            </Item>
        </Grid>
        <Grid item xs={6} md={6}>
            <h1>Principle</h1>
           <Paper elevation={4} align="center">
            <p>
                {data.principle[0].principleHeadMessage}
                <p>{data.principle[0].principleQuote}</p>
                <p>{data.principle[0].principleMessage}</p>
            </p>
           </Paper>
        </Grid>
        </Grid>
        </>
)};

export default Principle;