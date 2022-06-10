const mongoose = require('mongoose');

const Schema =new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min: 6,
        max: 50
    },
    email:{
        type:String,
        require:true,
        min:5,
    },
    jobId:{
        type:Number,
        require:true,
        min:10
    },
    PhoneNo:{
        type:Number,
        require:true,
        min:10,
    },
    Password:{
        type:String,
        require:true,
        min:8,
        max:15,
    },
    Date:{
        type:Date,
        default:Date.now()
    }

})

module.exports =new mongoose.model('Teacher',Schema);