const router=require('express').Router();
const User = require('../models/User');
const {VerifyToken}=require("./VerifyToken");
const {VerifyTokenAndAuthorization,VerifyTokenAndAdmin }=require("./VerifyToken");

router.put("/:id",VerifyTokenAndAuthorization ,async (req,res) =>
{
    if(req.body.password)
    {
        req.body.password= CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString()
    }
    try{
        const updateduser= await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateduser);
    }catch(err)
    {
        res.status(500).json(err)
    }
})
router.delete("/:id",VerifyTokenAndAdmin, async (req,res) =>
{
     try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    }
    catch(err)
    {
         res.status(500).json(err);

     }
})
router.get("/find/:id",VerifyTokenAndAdmin, async (req,res) =>
{
     try{
        const user =await User.findById(req.params.id);
        const {password, ...others}=user._doc;
        res.status(200).json(others);
    }
    catch(err)
    {
         res.status(500).json(err);

     }
})
router.get("/",VerifyTokenAndAdmin, async (req,res) =>
{
    const query=req.query.new;
     try{
        const users =query ? await User.find().limit(5) : await User.find();
       
        res.status(200).json(users);
    }
    catch(err)
    {
         res.status(500).json(err);

     }
})

module.exports =router;