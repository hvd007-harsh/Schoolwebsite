import { Button } from '@mui/material';
import React from 'react';
import { Route, Routes, useNavigate ,useParams} from 'react-router-dom';
import Classroom from './Screens/Classroom';
import Student from './Screens/Student';
import RegisterStudent from './Screens/RegisterStudent';
import Data from './Screens/Data';
import Report from './Screens/Report';
import './TeacherDashboard.css';



const TeacherDashboard = () =>{
    const id = useParams();
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
          <Route path="student" element={<Student/>}/>
          <Route path="registerStudent" element={<RegisterStudent id={id.id} />}/>
          <Route path="report" element={<Report/>}/>
          <Route path="data" element={<Data/>}/>

      </Routes> 
    </div>)
}
export default TeacherDashboard;
