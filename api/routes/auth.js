const router=require('express').Router();
const User= require("../models/User");
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")
router.post("/register",async (req,res) =>
 {
    console.log(req.body)
    if(await User.findOne({email:req.body.email}))
    {
        return res.status(401).json("user already exists")
    }
    else
    {
        const newuser= new User({
            username:req.body.username,
            email:req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
            });
         try{
            const saveduser=await newuser.save();
            res.status(201).json(
                {
                    _id:saveduser._id,
                    username:saveduser.name,
                    email:saveduser.email,
                    isAdmin:saveduser.isAdmin,
                    token:tokengenerator(saveduser._id,saveduser.isAdmin)
                })
            }catch(err) 
            {
                // console.log(err.message);
                res.status(500).json(err.message)
            }
    }    
 })

 router.post("/login", async(req,res) =>
 {
    try{
        console.log(req.body)
        const user=await User.findOne({username:req.body.username})
        .select("username password isAdmin email")
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
            console.log(user)
            const accesstoken= tokengenerator(user._id,user.isAdmin)
            const {password, ...others}=user._doc;
            res.status(201).json({...others,accesstoken});

        }
    }catch(err)
    {
        console.log("catch");
        
        res.status(500).json(err)
    }
 })
 const tokengenerator= (id,isAdmin) =>
 {
    return(jwt.sign({id:id,isAdmin:isAdmin},process.env.JWT_SEC,{expiresIn:"15d"}))

 }
module.exports =router;