import { Button } from "@mui/material";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Assingment from "../Screens/Assingment";
import Classroom from "../Screens/Classroom";
import JoinLecture from "../Screens/JoinLecture";
import Result from "../Screens/Result";
import TutionFees from "../Screens/Tutionfee";
import './StudentDashboard.css';

const StudentDashboard = ()=>{
    let navigate = useNavigate();
    return<> 
    <ul className="item">
        <li className="item"> <Button color="error" onClick={()=>{navigate("tutionfee")}}>TutionFees</Button></li>
        <li className="item"> <Button color="error" onClick={()=>{navigate("classroom")}}>Classroom</Button></li>
        <li className="item"><Button  color="error" onClick={()=>{navigate("lecture")}}>Join lecture</Button></li>
        <li className="item"><Button  color="error" onClick={()=>{navigate("assingment")}}>Assingment Upload</Button></li>
        <li className="item"><Button  color="error" onClick={()=>{navigate("result")}}>Result</Button></li>
    </ul>
    
    <h1 href="/">
    Student Dashboard 
    </h1>

    <Routes>
        <Route path="tutionfee" element={<TutionFees/>} />
        <Route path="classroom" element={<Classroom/>} />
        <Route path="lecture" element={<JoinLecture/>} />
        <Route path="assingment" element={<Assingment/>} />
        <Route path="result" element={<Result/>} />
    </Routes>
  </>  
}

export default StudentDashboard;