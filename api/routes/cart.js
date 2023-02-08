const router=require('express').Router();

const Cart=require("../models/Cart");
const {VerifyToken}=require("./VerifyToken");
const {VerifyTokenAndAuthorization,VerifyTokenAndAdmin }=require("./VerifyToken");


router.post("/",VerifyToken, async(req,res) =>
{
    const temp= await Cart.findOne({userId:req.body.userId});
    if(temp)
    {
        // console.log("cartexists")
        try{
            const updatedcart= await Cart.findOneAndUpdate({"userId":req.body.userId},{
                $set:req.body
            },{new:true})
            .populate({
                path: 'products.productid',
                model: 'Products',
           })
            res.status(200).json(updatedcart.products);
        }catch(err)
        {
            console.log(err.message)
            res.status(500).json(err.message)
        }
    }
    else{
        console.log(req.body);
        // console.log("cart does not exists")
        try{
            const newcart= new Cart(req.body);
            const savedcart=(await newcart.save())
            .populate({
                path: 'products.productid',
                model: 'Products',
           })
            res.status(200).json(savedcart.products);
        }catch(err)
        {
            console.log("in catch",err)
            res.status(500).json(err)
        }
    }
    
})

router.put("/",VerifyToken,async (req,res) =>
{
    console.log(req.body);
    try{
        
        const updatedcart= await Cart.findOneAndUpdate({"userId":req.body.userId},{
            $set:req.body
        },{new:true})
        .populate({
            path: 'products.productid',
            model: 'Products',
       })
       
       
        // console.log(updatedcart)
        res.status(200).json(updatedcart.products);
    }catch(err)
    {
        res.status(500).json(err.message)
    }
})
router.delete("/updatecart",VerifyToken,async(req,res) =>
{
    console.log(req.body)
    try{
        
        const s=await Cart.findOneAndUpdate(
            { _id: req.body.cartId },
            { products:{$pull:{ _id: req.body.pid } } },
            { safe: true, multi: false }
          );
        //   console.log(s);
          return res.status(200).json("cart Updated");
    }catch(err)
    {
        console.log("in catch");
        console.log(err.message);
        return res.status(500).json(err.message);
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
router.get("/find/:userId",VerifyTokenAndAuthorization, async (req,res) =>
{
     try{
        const cart =await Cart.findOne({userId:req.params.userId})
        .populate({
            path: 'products.productid',
            model: 'Products',
        })
        if(cart)
        res.status(200).json(cart.products);
        else
        res.status(400).json("No such Cart exists");
    }
    catch(err)
    {
         res.status(500).json(err.message);

     }
    // return res.status(401).json("jhh")
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