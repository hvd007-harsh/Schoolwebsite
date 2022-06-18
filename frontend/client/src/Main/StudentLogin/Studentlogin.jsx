import React,{useState} from 'react';
import './StudentLogin.css';
import Button from '@mui/material/Button';
import axiosinstance from '../../utilities/axios';


const StudentLogin = ()=>{
       const [student,setStudent] = useState({
           name:"",
           fatherName:"",
           rollNo:"",
           course:"",
           classroom:""
       });


       const handleChange = (e)=>{  
            const {name , value} = e.target;
            setStudent({
                ...student,
                  [name]: value
            })
       }



       const Submit = () =>{
           const {name , fatherName, rollNo ,course , classroom} = student;
        if(name && fatherName && rollNo && course && classroom){
            const data = { name , fatherName, rollNo, course, classroom};
            axiosinstance.post('/student/login',data).then(res=>{
               alert(res.data.message);
            });
        }else{
            alert("Please enter the data");
       }
       }


    return(
        <>
           <div className='form'>
        <form>
            <h2>STUDENT LOGIN</h2>
            <label>Name:</label>
            <input className='input form-input' name='name' onChange={handleChange} value={student.name} id=''/><br/>
            <label>Father Name:</label>
            <input className='input form-input' name='fatherName' onChange={handleChange} value={student.fatherName} id=''/><br/>
            
            <label>rollNo:</label>
            <input className='input form-input' name='rollNo' onChange={handleChange} value={student.rollNo} id=''/><br/>
            
            <label>course:</label>
            <input className='input form-input' name='course' onChange={handleChange} value={student.course} id=''/><br/>
            
            <label>Classroom:</label>
            <input className='input form-input' name='classroom' onChange={handleChange} value={student.classroom} id=''/><br/>
            <Button onClick={Submit} variant="outlined" color="error">Submit</Button>
            </form>   
           </div>
        </>
    )
}


export default StudentLogin;