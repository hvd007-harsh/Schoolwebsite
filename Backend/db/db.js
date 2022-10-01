const mongoose =require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/college',()=>{
    console.log('server is connected to the database');
})

module.exports = db;