const mongoose = require('mongoose');

const Schema =new mongoose.Schema({
      student_Name:{
          type:String,
          require:true
      },
      father_Name:{
           type:String,
           require:true
      },
      roll_No:{
           type:Number,
           require:true,
           max:7   
      },
      course:{
          type:String,
          require:true,
      },
      classroom:{
          type:String,
          required:true
      }

})
module.exports  = new mongoose.model('Student',Schema);