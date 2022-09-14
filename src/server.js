import express from "express";
const app=express();

app.get("/",(req,res)=>{
    res.send("Serveris runiung");
})
app.listen("3001",function(){
    console.log("Port 3000 is running");
})
