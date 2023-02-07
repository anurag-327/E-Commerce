const mongoose=require('mongoose');
const CartSchema= new mongoose.Schema(
    {
        userId:{type:mongoose.Schema.Types.ObjectId,required:true},
        products: [
            {
                productid:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:"User",
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