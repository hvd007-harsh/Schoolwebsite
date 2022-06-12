import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TeacherDashboard.css';



const TeacherDashboard = (props) =>{
    const navigate = useNavigate();
    const Change= ()=>{
        props.setTeacher(false);
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
    </div>)
}
export default TeacherDashboard;
