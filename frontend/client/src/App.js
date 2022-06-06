import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import { createBrowserHistory as history } from 'history';
import Header from './Header/Header';
import {Routes,Route } from "react-router-dom";
import Home from "./Main/Home";
import About from "./Main/About";
import Principle from "./Main/Principle";
import Login from './Main/Login/Login';
import StudentLogin from './Main/StudentLogin/Studentlogin';
function App() {
  return (

  <Router history={history}>
 <Header />
 <Routes> 
   <Route exact path="/" element={<Home /> } />
   <Route path="/about" element={<About /> } />
   <Route path="/principle" element={<Principle/> } />
   <Route path='/login' element={<Login/>} />
   <Route path='/login/student' element={<StudentLogin/>} />
   <Route  element={
     <h1 style={{color:"black", fontSize:"large" , align:"centre"}}>
       404 Enter a valid URL 
     </h1>} />

    <Route exact path="/:page?" render={(props)=> <Header {...props} /> } >
    </Route>
  </Routes>
  </Router>
)}

export default App;
