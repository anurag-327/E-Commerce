const router=require('express').Router();

const Order=require("../models/Order");
const {VerifyToken}=require("./VerifyToken");
const {VerifyTokenAndAuthorization,VerifyTokenAndAdmin }=require("./VerifyToken");


router.post("/",VerifyTokenAndAdmin, async(req,res) =>
{
    try{
        const neworder= new Order(req.body);
        const savedorder=await neworder.save();
        res.status(200).json(savedorder);
    }catch(err)
    {
        res.status(500).json("Cannot add order")
    }
})

router.put("/:id",VerifyTokenAndAuthorization ,async (req,res) =>
{
   
    try{
        const updatedorder= await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedorder);
    }catch(err)
    {
        res.status(500).json(err)
    }
})
router.delete("/:id",VerifyTokenAndAuthorization, async (req,res) =>
{
     try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("order has been deleted");
    }
    catch(err)
    {
         res.status(500).json(err);

     }
})
router.get("/find/:userId",VerifyTokenAndAdmin, async (req,res) =>
{
     try{
        const order =await Order.findOne({userId:req.params.userId});
        if(order)
        res.status(200).json(order);
        else
        res.status(200).json("No such order exists");
    }
    catch(err)
    {
         res.status(500).json(err);

     }
})
router.get("/",VerifyTokenAndAdmin,async (req,res) =>
{
    try{
        const orders= await Order.find();
        res.status(200).json(orders);
    }catch(err)
    {
        res.status(500).json(err);
    }
})
module.exports =router;