import React,{useState} from 'react';
import Button from "@mui/material/Button";
import "./screendashboard.css";
import axiosinstance from '../../../utilities/axios';
const RegisterStudent = ()=>{
    const [student,setStudent]= useState({
        name:"",
        fatherName:"",
        rollNo:"",
        course:"",
        classroom:""
    });
    const handleChange=(e)=>{
        const {name , value } = e.target;
         setStudent({...student,
            [name]:value
        })
    }
    const Submit=()=>{
        const {name , fatherName, rollNo ,course , classroom} = student;
        if(name && fatherName && rollNo && course && classroom){
            const student = { name , fatherName, rollNo, course, classroom};
            axiosinstance.post('/student/register',student).then(res=>{
               alert(res.data.message);
            });
        }else{
            alert("Please enter the data");
       }
    }
    return <div className='registerContainer'>
    <h1>RegisterStudent</h1>
    <input name='name'      onChange={handleChange} placeholder='Name' className='input' type="text" minLength="50" value={student.name}/>
    <input name='fatherName' onChange={handleChange} placeholder='FatherName ' className='input' type="name"  minLength="50" value={student.fatherName}/>
    <input name='rollNo'    onChange={handleChange} placeholder='RollNo' className='input' type="number"  minLength="50" value={student.rollNo}/>     
    <input name='course'    onChange={handleChange} placeholder='Course' className='input' type="text"  minLength="50" value={student.course}/>
    <input name='classroom' onChange={handleChange} placeholder='ClassRoom ' className='input' type="name" minLength="50" value={student.classroom}/>

    <Button onClick={Submit} variant="outlined" color="error">Submit</Button>
    </div>
}
export default RegisterStudent