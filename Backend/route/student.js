const express = require('express');
const Student = require('../model/student');

const route = express.Router();

route.post('/login',async(req,res)=>{
     const user =   req.body;
     
     console.log(user);
    res.send({
          message:"Recieved",
    })
})
route.post('/register',async(req,res)=>{
      const {name , fatherName, rollNo ,course , classroom} = req.body;
  Student.findOne({rollNo},(err,data)=>{
      if(!data){
            const student = new Student({
                  name,
                  fatherName,
                  rollNo,
                  course,
                  classroom
          });
          student.save();
      }else{
            res.send({message:"Student can not be at same Roll No"});
      }
    })
    
})



module.exports = route;