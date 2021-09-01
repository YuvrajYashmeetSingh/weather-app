const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>hello yuvraj</h1>")
})
app.get("/bio",(req,res)=>{
    res.send([{
        id:1,
        name:"Yuvraj Yashmeet Singh",
        age:19,
        address:"Narian"
    }])
})
app.listen(8000,()=>{
console.log(`connection established`)
})