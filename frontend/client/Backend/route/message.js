const express = require('express');
const message = require('../model/message');

const route = express.Router();


route.get('/globalmessage',(req,res)=>{
    // var io = req.get('socketio');
    // io.on('connection',(socket)=>{
    // console.log('New connection'+socket.id);
    // })
})

module.exports = route;


