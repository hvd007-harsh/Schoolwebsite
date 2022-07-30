import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate,generatePath} from "react-router-dom";
import { createBrowserHistory as history } from "history";
import Home from "./Main/Home";
import About from "./Main/About";
import Principle from "./Main/Principle";
import Login from "./Main/Login/Login";
import StudentLogin from "./Main/StudentLogin/Studentlogin";
import Teacher from "../src/Main/TeacherLogin/Teacher";
import TeacherRegister from "./Main/TeacherRegister/TeacherRegistration";
import TeacherDashboard from "./Main/Dashboard/TeacherDashboard";
import Header from "./Header/Header";
import StudentDashboard from "./Main/Dashboard/StudentDashboard/StudentDashboard";
import Footer from "./Footer/Footer";

function App() {
  const [teacher, setTeacher] = useState();
  const [student,setStudent] = useState();
  const id = window.localStorage.getItem("id");
  const studentId = window.localStorage.getItem("studentId");
  const path = ()=>{
  if(id){ 
    return generatePath("/dashboard/:id/",{id}) 
  }else{
     return "";
  }
};
  const path1 = ()=>{
  if(studentId){  
   return generatePath("/studentdashboard/:studentId/",{studentId})
  }else{
    return""
  }
}
  useEffect(() => {
    setStudent(window.localStorage.getItem("student"));
    setTeacher(window.localStorage.getItem("teacherlogged"));
  }, []);


  return (
    <Router history={history}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/principle" element={<Principle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/student" element={student ? <Navigate to={path1()}/>:<StudentLogin />} />
        <Route path="/studentdashboard/:studentId/*" element = {<StudentDashboard/> }/>
        <Route path="/login/teacher" element={teacher ? <Navigate to={path()}/>:<Teacher />} />
        <Route path="/dashboard/:id/*" element={<TeacherDashboard />} />
        <Route path="/register/teacher" element={<TeacherRegister />} />

        <Route
          path="*"
          element={
            <h1 style={{ color: "black", fontSize: "large", align: "centre" }}>
              404 Enter a valid URL
            </h1>
          }
        />

        <Route
          exact
          path="/:page?"
          render={(props) => <Header {...props} />}
        ></Route>
      </Routes>
            <Footer />
    </Router>
  );
}

export default App;
