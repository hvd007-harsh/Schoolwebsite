import React,{useState} from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Home from "../Main/Home";
import About from "../Main/About";
import Principle from "../Main/Principle";

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { AppBar } from "@mui/material";
const Header = props => {
  const {match} = props;
  const {params} =match;
  const {page} = params;
  console.log(page);

  // const tabNameToIndex ={
  //   0:"Home",
  //   1: "About",
  //   2: "Principle"
  // }
  const indexToTabname ={
    "Home":0,
    "About": 1,
    "Contact":2
  }
  const [value, setValue]= useState(indexToTabname[page]);

  const handleChange=(event,newValue)=>{
    setValue(newValue);
  }
  return(
    <>
    <nav>
    <Typography align="center" fontSize={32} >
    UP Board inter college
      </Typography>
        <AppBar>
           <Tabs  value={value} onChange={handleChange}>
            <Tab value="0"  label="Home"/>
            <Tab value="1"  label="About" />
            <Tab value="2" label="principle" />
          </Tabs>
          </AppBar>
         
            {value === 0 && <Home/>}
            {value === 1 && <About/>}
            {value === 2 && <Principle/>}
        
    </nav>

  <Main/>
  <Footer/>
  </>
)};

export default Header;