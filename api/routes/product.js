const router=require('express').Router();
const User = require('../models/User');
const Product = require('../models/Product');
const {VerifyToken}=require("./VerifyToken");
const {VerifyTokenAndAuthorization,VerifyTokenAndAdmin }=require("./VerifyToken");


router.post("/",VerifyTokenAndAdmin, async(req,res) =>
{
    try{
        const newproduct= new Product(req.body);
        const savedproducts=await newproduct.save();
        res.status(200).json(savedproducts);
    }catch(err)
    {
        res.status(500).json("Cannot add product")
    }
})

router.put("/:id",VerifyTokenAndAdmin ,async (req,res) =>
{
   
    try{
        const updatedProducts= await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedProducts);
    }catch(err)
    {
        res.status(500).json(err)
    }
})
router.delete("/:id",VerifyToken, async (req,res) =>
{
     try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    }
    catch(err)
    {
         res.status(500).json(err);

     }
})
router.get("/find/:id", async (req,res) =>
{
     try{
        const product =await Product.findById(req.params.id);
        if(product)
        res.status(200).json(product);
        else
        res.status(200).json("No such product exists");
    }
    catch(err)
    {
         res.status(500).json(err);

     }
})
router.get("/", async (req,res) =>
{
    const qnew=req.query.new;
    const qcategories=req.query.category;
     try{
        let products;
        if(qnew)
        {
           products=  await Product.find().limit(5) ;
        }
        else if(qcategories)
        {
            products=await Product.find({
                categories:{$in:[qcategories]}
            })
        }
        else
         products = await Product.find().sort({createdAt:-1}) 
       
        res.status(200).json(products);
    }
    catch(err)
    {
         res.status(500).json(err);

     }
})
module.exports =router;