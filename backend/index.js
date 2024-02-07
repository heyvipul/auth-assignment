const express = require("express");
const { default: mongoose } = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const PORT = 8000;
app.use(express.json())
app.use(bodyParser.json());
app.use(cors({
    origin: "*",   
}));

async function main(){
    try {
       await mongoose.connect(process.env.MONGODB)
       console.log("mongodb connection successfully!");
    } catch (error) {
        console.log("connection failed");
    }
}
main()

app.get("/",(req,res)=>{
    res.send("base endpoint running!")
})

app.post("/register", async(req,res)=>{
    try {
        const{name,email,password} = req.body
        const user_exist = await User.findOne({email})
        if(user_exist){
            return res.send({msg:"user exist"})
        }
        bcrypt.hash(password,4,async(err,hash)=>{
            await User.create({name,email,password:hash})
            res.send({msg:"signup successfull!"})
        })

    } catch (error) {
        res.send({error:"signup failed!"})
        console.log(error);   
    }
})

app.listen(PORT,()=>{
    console.log("port running!");
})