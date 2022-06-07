const express = require('express');
const Student = require('../model/student');

const route = express.Router();

route.post('/login',async(req,res)=>{
     const user =   req.body;
     console.log(user);
})



module.exports = route;