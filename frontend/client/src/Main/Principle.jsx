import { Grid, Card } from "@mui/material";
import React from "react";
import data from "../data/data";
import { styled } from '@mui/material/styles';
import "./Main.css";

const Item = styled(Card)(({ theme }) => ({
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
           <Card elevation={10} align="center" style={{
              backgroundColor:"#480350",
              color:"#fff",
              height:"auto",
           }}>
                <h3>Principle Head Message: </h3>
                {data.principle[0].principleHeadMessage}
                <hr />
                <h3>Principle Quote:</h3>
                {data.principle[0].principleQuote}
                <hr />
                <div className="largetext">
                <h3>Principle Message:</h3>
                {data.principle[0].principleMessage}
                <hr/>
                </div> 
            </Card>
        </Grid>
        </Grid>
        </>
)};

export default Principle;