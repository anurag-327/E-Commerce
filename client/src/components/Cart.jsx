import React from 'react' 
import { useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
function Cart()
{
    const data=[
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Long Sleeve Fraphic T-Shirt",
            isnew:true,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Saree",
            isnew:false,
            oldprice:1500,
            discountprice:999,
        }
    ]
    return(
    <div className='absolute top-12 bg-white w-[23rem] p-6 gap-4  z-50 right-2 flex flex-col'>
        <div>
            <h1 className='font-bold text-lg'>Products In your cart</h1>
           
        </div>
        <div className='gap-2 flex flex-col'>
            {
                data.map((item) =>
                (
                    <div className='flex gap-2 text-gray-600'>
                        <div className='w-28'>
                            <img className='object-cover' src={item.img} alt="carticon" />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <h2 className='font-bold'>{item.title}</h2>
                            <div className='flex'>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                            </p>
                            <DeleteOutlineOutlinedIcon />

                            </div>
                                                               
                            <h1 className='font-bold'>1*₹{item.discountprice}</h1>
                        </div>
                    </div>
            ))
            }
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between font-bold'>
                <h2>SUBTOTAL</h2>
                <span>₹ 1998</span>
                </div>
                <button className='bg-blue-500 text-white px-3 py-1 '>PROCEED TO CHECKOUT</button>
                 <h2 className='text-center  text-blue-500'>Reset cart</h2>
            </div>
        </div>
        
    </div>
    )
}
export default Cart