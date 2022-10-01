const mongoose = require('mongoose');
const student =new mongoose.Schema({
      name:{
          type:String,
          require:true
      },
      fatherName:{
           type:String,
           require:true
      },
      rollNo:{
           type:Number,
           require:true,   
      },
      teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'teacher',
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
module.exports  = new mongoose.model('student',student);