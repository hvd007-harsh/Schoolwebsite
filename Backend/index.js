const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./db/db');
const dotenv = require('dotenv');
const message = require('./model/message');


dotenv.config();

const app = express();
const PORT = process.env.PORT;
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

const httpServer = require("http").createServer(app);

const io = require("socket.io")(httpServer)

io.on('connection',(socket)=>{
    console.log('New connection'+socket.id);
})

app.use('/student',require('./route/student'));
app.use('/teacher',require('./route/teacher'));
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})

