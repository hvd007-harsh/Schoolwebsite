const express = require("express");
const teacher = require("../model/teacher");
const validate = require("../utils/validate");
const bcrypt = require("bcryptjs");

const route = express.Router();
const saltround = 10;
//Here we register the teacher
route.post("/register", (req, res) => {
  const Teacher = req.body;
  const valid = validate(Teacher, req, res);
  console.log(valid);
  var { name, email, PhoneNo, jobId, Password } = Teacher;
  if (valid) {
    name = name.trim();
    email = email.trim();
    PhoneNo = PhoneNo.trim();
    jobId = jobId.trim();
    Password = Password.trim();

    teacher.findOne({ email }, async (err, data) => {
      if (data) {
        res.send({ message: "User is already exist with same Email" });
      } else {
        await bcrypt.genSalt(saltround, function (err, salt) {
          bcrypt.hash(Password, salt, function (err, hash) {
            // Store hash in your password DB.
            const data = new teacher({
              name,
              email,
              PhoneNo,
              jobId,
              Password: hash,
            });
            data.save();
            res.send({ message: "Submitted" });
          });
        });
      }
    });
  } else {
    console.log("Error 404 get");
  }
});

//Making login for Teacher
route.post("/login", (req, res) => {
  try {
    const Teacher = req.body;
    var { email, jobId, Password } = Teacher;
    teacher.findOne({ email }, async (err, data_Teacher) => {
      if (data_Teacher) {
        var check = await bcrypt.compare(Password, data_Teacher.Password);

        if (check && data_Teacher.jobId == jobId) {
          console.log(data_Teacher.jobId);
          res.send({
            isAuth: true,
            name: data_Teacher.name,
            id: data_Teacher.id,
            message: "Successfully Logged In",
          });
          req.session.isAuth = true;
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
});


module.exports = route;
