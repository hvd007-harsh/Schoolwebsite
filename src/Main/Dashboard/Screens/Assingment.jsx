import React from "react";
import './screendashboard.css';
const Assingment = () =>{
    return <div className="container2">
    <div className="assingment">
       <h3> Assingment </h3>
    </div>
    <div className="result">
      <h4>Result</h4>
        <form>
             Name: <input type="text" name="name" id="name" />
             Fname: <input type="text" name="Fname" id="fname"/>
             Mname: <input type="text" name="Mname" id="mname"/>
             RollNo: <input type="number" name="RollNo" id="rollno" />

        </form>
    </div>   
       
     </div>
}
export default Assingment;