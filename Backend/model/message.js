const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    message:{
        type:String,
        require:true,
    },
    proffession:{
       type:mongoose.Types.ObjectId,
       require:true,
    }
},{timestamps:true})

const messages =  mongoose.model('messages',Schema);
module.exports = messages;