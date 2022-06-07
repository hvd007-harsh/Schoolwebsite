const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./db/db');

const app = express();

app.use(cors());
app.use(session({
    name: 'Student',
    resave: false,
    saveUninitialized:true,
    cookie:{secure:true ,
    maxAge:432000000},
    isAuth: false,

}))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
db();

app.use('')
