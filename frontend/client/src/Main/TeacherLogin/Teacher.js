import React,{useState} from 'react';
import './Teacher.css';
import Button from '@mui/material/Button';
import axiosinstance from '../../utilities/axios';
import { Link,useNavigate } from 'react-router-dom';

const Teacher = (props)=>{
       const navigate = useNavigate();
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
           const {email,jobId,Password} = teacher;

        if(email && jobId && Password){
            const data = {email,jobId,Password};
            axiosinstance.post('/teacher/login',data).then(res=>{
               console.log(res.data);
              alert(res.data.message);
              props.setTeacher(res.data.isAuth);
              navigate("/dashboard");
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
        
            <label>Email:</label>
            <input className='input form-input' name='email' onChange={handleChange} value={teacher.email} /><br/>
           
            <label>JobId:</label>
            <input className='input form-input' name='jobId' onChange={handleChange} value={teacher.jobId}/><br/>
            
            <label>Password:</label>
            <input className='input form-input' type="password" name='Password' onChange={handleChange} value={teacher.Password}/><br/>
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