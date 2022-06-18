import React ,{useState} from "react";
import { Button } from "@mui/material";
import axiosinstance from "../../utilities/axios";
import { Link } from "react-router-dom";

const TeacherRegister = ()=>{

    const [teacher,setTeacher] = useState({
        name:"",
        email:"",
        PhoneNo:"",
        jobId:"",
        Password:"",
        ConfirmPassword:""
    });

    const handleChange = (e)=>{  
        const {name , value} = e.target;
        setTeacher({
            ...teacher,
              [name]: value
        })
   }

    const Submit = () =>{
    const {name , email, PhoneNo ,jobId , Password, ConfirmPassword} = teacher;

     if(name && email && PhoneNo && jobId && Password === ConfirmPassword)
    {
     const data = { name , email, PhoneNo,jobId , Password};
     axiosinstance.post('/teacher/register',data)
     .then(res=>{
        alert(res.data.message);
        });
    }
    else
    {
     alert("Please enter the data or password is not match");
    }
}
    return(
        <>
            <div className="form">
               <h3> REGISTRATION FOR TEACHER'S</h3>
            </div>
            <form>
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

            <label>Confirm Password:</label>
            <input className='input form-input' type="password" name='ConfirmPassword' onChange={handleChange} value={teacher.ConfirmPassword} id=''/><br/>
            <Button onClick={Submit} variant="outlined" color="error">Submit</Button>
            </form>
            <div>
                For a login Click here <Link to="/login/teacher">login</Link>
            </div>

        </>
    )
}

export default TeacherRegister;