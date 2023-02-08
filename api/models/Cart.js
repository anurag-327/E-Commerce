const mongoose=require('mongoose');
const CartSchema= new mongoose.Schema(
    {
        userId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"User"},
        products: [
            {
                productid:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:"Products",
                    unique:true
                },
                quantity:{
                    type:Number,
                    default:1
                }
            }
        ]      
    },
    {
        timestamps:true
    }
);
module.exports=mongoose.model("Cart",CartSchema);