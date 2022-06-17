import React,{useState} from 'react';
import class_data from '../../../data/class_data';
import { Button } from '@mui/material';

import "./screendashboard.css";
const Classroom = ()=>{
    const [classname,setClassname] = useState("");
     const handleChange = (event) =>{
        const {value} = event.target;
        setClassname(value);
     }
     const submit = (e)=>{
           const classname = e.target.value;
           class_data.push(classname);
           console.log(class_data);
     }
    return <div>
    <h4 className='title'> Create Classroom</h4>
       <div className='container'>
            <div className='sidenav'>
                <label>Class Name</label>
                <input name="classname" className='input' onChange={handleChange} value={classname} />
                <Button className="btn" onClick={submit} value={classname}>Submit</Button>
            </div>
            <div className='classroom'>
                <h1>CLASSROOM</h1>
                {class_data.map(element=>{
                       return <h3>{element}</h3>
                })}
            </div>
       </div>
    
    </div>
}
export default Classroom