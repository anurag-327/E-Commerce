const router=require('express').Router();

const Cart=require("../models/Cart");
const {VerifyToken}=require("./VerifyToken");
const {VerifyTokenAndAuthorization,VerifyTokenAndAdmin }=require("./VerifyToken");


router.post("/",VerifyToken, async(req,res) =>
{
    try{
        const newcart= new Cart(req.body);
        const savedcart=await newcart.save();
        res.status(200).json(savedcart);
    }catch(err)
    {
        res.status(500).json("Cannot add Cart")
    }
})

router.put("/:id",VerifyTokenAndAuthorization ,async (req,res) =>
{
   
    try{
        const updatedcart= await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedcart);
    }catch(err)
    {
        res.status(500).json(err.message)
    }
})
router.delete("/:id",VerifyTokenAndAuthorization, async (req,res) =>
{
     try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted");
    }
    catch(err)
    {
         res.status(500).json(err.message);

     }
})
router.get("/find/:userId",VerifyTokenAndAdmin, async (req,res) =>
{
     try{
        const cart =await Cart.findOne({userId:req.params.userId}).populate({path:'products',populate:{path:'productid'}});
        console.log(cart)
        if(cart)
        res.status(200).json(cart);
        else
        res.status(400).json("No such Cart exists");
    }
    catch(err)
    {
         res.status(500).json(err.message);

     }
})
router.get("/",VerifyTokenAndAdmin,async (req,res) =>
{
    try{
        const carts= await Cart.find();
        res.status(200).json(carts);
    }catch(err)
    {
        res.status(500).json(err);
    }
})
module.exports =router;