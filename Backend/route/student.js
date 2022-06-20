const express = require("express");
const Student = require("../model/student");

const route = express.Router();

route.post("/login", async (req, res) => {
  const user = req.body;
  const { name , rollNo} = user;
  await Student.findOne({name},(err,data)=>{
    console.log(data);
    if(data.rollNo == rollNo){
         res.send({message: "Successfully Logged In",student:data.id})
    }else{
      res.send({message:"Incorrect credentials check again"})
    }
  })
  console.log(user);
  res.send({
    message: "Recieved",
  });
});
route.post("/register", async (req, res) => {
  const { rollNo } = req.body;
  console.log(req.body);
  Student.findOne({ rollNo }, (err, data) => {
    if (!data) {
      Student.create(req.body);
      res.send({ message: "Student data is arranged" });
    } else {
      res.send({ message: "Student can not be at same Roll No" });
    }
  });
});

module.exports = route;
