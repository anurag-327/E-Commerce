const mongoose=require('mongoose');
const OrderSchema= new mongoose.Schema(
    {
        userId:{type:mongoose.Schema.Types.ObjectId,required:true},
        products: [
            {
                productid:{
                    type:mongoose.Schema.Types.ObjectId
                },
                quantity:{
                    type:Number,
                    default:1
                }
            }
        ] ,
        amount:{type:Number,required:true},
        address:{type:Object,required:true},
        status:{type:String,default:"pending"}    
    },
    {
        timestamps:true
    }
);
module.exports=mongoose.model("Order",OrderSchema);