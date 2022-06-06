import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () =>{
    let navigate = useNavigate();
    return <>
       <div>
            <h5 onClick={()=>{
                navigate('student')}}><Button>login by Student</Button></h5>
            <h5 onClick={()=>{
                navigate('teacher')}}><Button>login by teacher</Button></h5>
       </div>
         
    </>
}
export default Login;