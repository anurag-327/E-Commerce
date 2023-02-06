const router=require('express').Router();
const User= require("../models/User");
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")
router.post("/register",async (req,res) =>
 {
    const newuser= new User({
        username:req.body.username,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
        });
    try{
        const saveduser=await newuser.save();
         res.status(201).json(saveduser)
        }catch(err) 
        {
        res.status(500).json(err)
        }
 })

 router.post("/login", async(req,res) =>
 {
    try{
        const user=await User.findOne({username:req.body.username})
        if(!user)
        {
            res.status(401).json("Wrong credentials");   
        }
        var hashedpassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8);
        if(hashedpassword!=req.body.password) 
        {
            res.status(401).json("Wrong Password");
        }
        else
        {
            const accesstoken= jwt.sign({
                id:user._id,
                isAdmin:user.isAdmin
            },
            process.env.JWT_SEC,
            {expiresIn:"3d"}
             );
            const {password, ...others}=user._doc;
            res.status(200).json({...others,accesstoken});

        }
    }catch(err)
    {
        console.log("catch");
        
        res.status(500).json(err)
    }
 })
module.exports =router;