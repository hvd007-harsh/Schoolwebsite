import React,{useState} from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {NavLink, Link,useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import './Header.css';
const Header = () => {
  // const {match} = props;
  // const {params} =match;
  // const {page} = params;
  // console.log(page);
     let navigate = useNavigate();

  // const tabNameToIndex ={
  //   0:"Home",
  //   1: "About",
  //   2: "Principle"
  // }
  // const indexToTabname ={
  //   "Home":0,
  //   "About": 1,
  //   "Contact":2
  // }
  const [value, setValue]= useState(0);

  const handleChange=(event,newValue)=>{
    setValue(newValue);
  }
  return(
    <>
    <nav>
    
        <Box sx={{backgroundColor:"primary.dark" , color:"black"}}>
        <Typography align="center" fontSize={32} >
    UP Board inter college
    <Button className="btn btn-primary" onClick={()=>{navigate("/login")}}> LOGIN/SIGNUP</Button>
      </Typography>
           <Tabs  value={value} onChange={handleChange}>
           <NavLink className="navlink removebar"  to="/">
            <Tab value={value} label="Home"/>
           </NavLink>
           <Link  className="removebar" to="/about">
            <Tab value={value} label="About"/>
            </Link>
            <Link className="removebar" to="/principle">
            <Tab value={value}  label="Principle"/>
            </Link>
            <Link className="removebar" to="/history">
            <Tab value={value}  label="History And Achievements"/>
            </Link>
            <Link className="removebar" to="/classroom">
            <Tab value={value}  label="Classroom Gallery"/>
            </Link>
            <Link className="removebar" to="/labroom">
            <Tab value={value}  label="Labroom Gallery"/>
            </Link>
            <Link className="removebar" to="/library">
            <Tab value={value}  label="Library Gallery"/>
            </Link>
            <Link className="removebar" to="/events">
            <Tab value={value}  label="Events And Exhibition"/>
            </Link>
            <Link className="removebar" to="/pressrelease">
            <Tab value={value}  label="Press Released"/>
            </Link>
          </Tabs>
          </Box>
    </nav>
  </>
)};

export default Header;