const mongoose =require('mongoose');

const db = mongoose.connect('https://localhost:27017',()=>{
    console.log('server is connected to the database');
})

module.exports = db;