const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url)
const connection=mongoose.connection;
connection.on('error', ()=>{
    console.log("error connection to database")
})

connection.on('connected', ()=>{
    console.log('mongo connection successfull')
})
module.exports=connection;

