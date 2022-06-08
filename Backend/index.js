const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./db/db');
const dotenv = require('dotenv');
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


app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})
