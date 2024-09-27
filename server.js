const express=require("express")
const mongoose=require("mongoose")
const PORT=5000
const server=express()
server.use(express.json());
const url="mongodb://localhost:27017/learnmongo"
mongoose.connect(url).then(()=>{
    console.log("connected");
})
const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    subject:String
})
server.post("/user",(req,res)=>{
    
    const user=new userModel({
    name:req.body.name,
    age:req.body.age,
    subject:req.body.subject

    })
    user
    .save()
    .then(()=>{
        console.log("hello")
    }).catch((err)=>{
        console.log("error")
    })
})
const userModel=mongoose.model("user",userSchema);
server.listen(PORT,()=>{
console.log(`server is running on port, ${PORT}`);
})