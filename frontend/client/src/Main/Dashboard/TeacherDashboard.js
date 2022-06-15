import { Button } from '@mui/material';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Classroom from './Screens/Classroom';
import './TeacherDashboard.css';



const TeacherDashboard = () =>{
    const navigate = useNavigate();
    const Change= ()=>{
       window.localStorage.removeItem("teacherlogged"); 
       navigate("/login/teacher");
    }

    return (<div>
    <Button variant='outlined' onClick={Change} className='btn' color="info">Logout</Button>
      <div id="mysidenav" className="sidenav">
         <Button onClick={()=>{navigate("classroom")}}>Classroom</Button>
         <Button onClick={()=>{navigate("student")}}>Student</Button>
         <Button onClick={()=>{navigate("registerStudent")}}>RegisterStudent</Button>
         <Button onClick={()=>{navigate("report")}}>Report</Button>
         <Button onClick={()=>{navigate("data")}}>Data</Button>
      </div> 
      <Routes>
          <Route path="classroom" element={<Classroom/>}/>
          <Route path="student" element={<Classroom/>}/>
          <Route path="registerStudent" element={<Classroom/>}/>
          <Route path="report" element={<Classroom/>}/>
          <Route path="data" element={<Classroom/>}/>

      </Routes> 
    </div>)
}
export default TeacherDashboard;
