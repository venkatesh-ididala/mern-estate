import express from 'express';
import mongoose from 'mongoose';
//import dotenv from 'dotenv';


//dotenv.config();



mongoose.connect("mongodb+srv://venkateshididala:venky332@cluster0.0pvrgro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {

    useUnifiedTopology: true,

    useNewUrlParser: true,

}).then(console.log('connect sucess to mongodb'))

const app=express();

app.listen(3000,()=>{
    console.log("server running on the port 3000...");
})