import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes,Route,Navigate } from "react-router-dom";
import { createBrowserHistory as history } from 'history';
import Home from "./Main/Home";
import About from "./Main/About";
import Principle from "./Main/Principle";
import Login from './Main/Login/Login';
import StudentLogin from './Main/StudentLogin/Studentlogin';
import Teacher from '../src/Main/TeacherLogin/Teacher';
import TeacherRegister from './Main/TeacherRegister/TeacherRegistration';
import TeacherDashboard from './Main/Dashboard/TeacherDashboard';
import Header from './Header/Header';

function App() {
 const [teacher, setTeacher] = useState()
  return (

  <Router history={history}>
 <Header />
 <Routes> 
   <Route exact path="/" element={<Home /> } />
   <Route path="/about" element={<About /> } />
   <Route path="/principle" element={<Principle/> } />
   <Route path='/login' element={<Login/>} />
   <Route path='/login/student' element={<StudentLogin/>} />
   <Route path='/login/teacher' element={teacher ? <Navigate to="/dashboard"/> :<Teacher  setTeacher={setTeacher} />} />
   <Route path='/register/teacher' element={<TeacherRegister/>}/>
   <Route path='/dashboard' element={teacher ? <TeacherDashboard  setTeacher={setTeacher} /> : <Navigate to="/login/teacher"/>} />

   setTeacher={setTeacher}

   <Route path='*' element={
     <h1 style={{color:"black", fontSize:"large" , align:"centre"}}>
       404 Enter a valid URL 
     </h1>} />

    <Route exact path="/:page?" render={(props)=> <Header {...props} /> } >
    </Route>
  </Routes>
  </Router>
)}

export default App;
