const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./db/db');
const dotenv = require('dotenv');
const socketIO = require('socket.io');
const http = require('http');


let socketio;


dotenv.config();

const app = express();
const PORT = process.env.PORT;
const server = http.createServer(app);

app.use(cors());
app.use(session({
    name: 'Student',
    resave: false,
    secret:"Travel Photovlog",
    saveUninitialized:true,
    cookie:{secure:true ,
    maxAge:432000000},
    isAuth: false,

}))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
db;


const io = socketIO(server);

// // // Assign socket object to every request
io.on('connection',(socket)=>{
    console.log('New connection');
    console.log(socket.id);
//   console.log(socket.handshake);
//   console.log(socket.rooms);
//   console.log(socket.data);
let Id = data.userId;
  socket.on("joined",(data)=>{
    console.log(data.userId);
  })
  
  socket.on("disconnection",()=>{
    console.log("Userleft");
  })
   
})




app.set("socketio",socketio);


app.use('/message',require('./route/message'));
app.use('/student',require('./route/student'));
app.use('/teacher',require('./route/teacher'));
server.listen(PORT,()=>{
    console.log(`Server is listening on PORT: ${PORT}`)
})