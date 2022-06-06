import React,{useState} from 'react';
import './StudentLogin.css';
import Button from '@mui/material/Button';

const StudentLogin = ()=>{
       const [name,setName] = useState();
       const [fatherName , setfatherName ] = useState();
       const [rollNo , setrollNo] = useState();
       const [course, setCourse]=  useState();
       const [classroom , setClassrooom]= useState();


       const handleChange = (e)=>{  
        setName(e.target.value);
        setfatherName(e.target.value);
        setrollNo(e.target.value);
        setCourse(e.target.value);
        setClassrooom(e.target.value);
       }
       const Submit = () =>{

       }
    return(
        <>
           <div className='container'>
        <form>
            <h2>STUDENT LOGIN</h2>
            <label>Name:</label>
            <input className='input form-input' name='name' onChange={handleChange} value={name} id=''/><br/>
            <label>Father Name:</label>
            <input className='input form-input' name='fatherName' onChange={handleChange} value={fatherName} id=''/><br/>
            
            <label>rollNo:</label>
            <input className='input form-input' name='rollNo' onChange={handleChange} value={rollNo} id=''/><br/>
            
            <label>course:</label>
            <input className='input form-input' name='course' onChange={handleChange} value={course} id=''/><br/>
            
            <label>Classroom:</label>
            <input className='input form-input' name='classroom' onChange={handleChange} value={classroom} id=''/><br/>
            <Button onClick={Submit} variant="outlined" color="error">Submit</Button>
            </form>   
           </div>
        </>
    )
}

export default StudentLogin;