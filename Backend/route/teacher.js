const express = require('express');
const teacher = require('../model/teacher');
const validate = require('../utils/validate');
const bcrypt = require('bcrypt');

const route = express.Router();
const saltround= 10;

route.post('/register', async(req,res)=>{
    const Teacher = req.body;
   const valid = validate(Teacher,req,res);
   console.log(valid);
    var {name , email, PhoneNo ,jobId , Password} = Teacher;
    if(valid){
        name = name.trim();
        email = email.trim();
        PhoneNo = PhoneNo.trim();
        jobId = jobId.trim();
        Password = Password.trim();
    await  bcrypt.genSalt(saltround, function(err, salt) {
            bcrypt.hash(Password, salt, function(err, hash) {
                // Store hash in your password DB.
                const data = new teacher({
                    name,
                    email,
                    PhoneNo,
                    jobId,
                    Password: hash
               })
                data.save();
            });
        });
                
          
              

    }else{
        console.log("Error 404 get"); 
    } 
})

module.exports = route;