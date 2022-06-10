import React,{useState} from 'react';
import './Teacher.css';
import Button from '@mui/material/Button';
import axiosinstance from '../../utilities/axios';
import { Link } from 'react-router-dom';


const Teacher = ()=>{
       const [teacher,setTeacher] = useState({
           name:"",
           email:"",
           PhoneNo:"",
           jobId:"",
           Password:""
       });


       const handleChange = (e)=>{  
            const {name , value} = e.target;
            setTeacher({
                ...teacher,
                  [name]: value
            })
       }


       const Submit = () =>{
           const {name , email, PhoneNo ,jobId , Password} = teacher;

        if(name && email && PhoneNo && jobId && Password){
            const data = { name , email, PhoneNo,jobId , Password};
            axiosinstance.post('/teacher/login',data).then(res=>{
               alert(res.data.message);
            });
        }else{
            alert("Please enter the data");
       }
       }


    return(
        <>
           <div className='container'>
        <form>
            <h2>Teacher Login</h2>
            <label>Name:</label>
            <input className='input form-input' name='name' onChange={handleChange} value={teacher.name} id=''/><br/>
            <label>Email:</label>
            <input className='input form-input' name='email' onChange={handleChange} value={teacher.email} id=''/><br/>
            
            <label>PhoneNo:</label>
            <input className='input form-input' name='PhoneNo' onChange={handleChange} value={teacher.PhoneNo} id=''/><br/>
            
            <label>JobId:</label>
            <input className='input form-input' name='jobId' onChange={handleChange} value={teacher.jobId} id=''/><br/>
            
            <label>Password:</label>
            <input className='input form-input' type="password" name='Password' onChange={handleChange} value={teacher.Password} id=''/><br/>
            <Button onClick={Submit} variant="outlined" color="error">Submit</Button>
            </form>   

            <div>
                For a login Click here <Link to="/register/teacher">Register</Link>
            </div>
           </div>
        </>
    )
}


export default Teacher;