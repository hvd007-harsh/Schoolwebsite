const express = require('express');
const Student = require('../model/student');

const route = express.Router();

route.post('/student/login',async(req,res)=>{
     const user =   req.body;
     console.log((user),()=>{
      res.message ="Recieved";
});
})



module.exports = route;