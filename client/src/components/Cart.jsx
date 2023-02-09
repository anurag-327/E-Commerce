import React from 'react' 
import { useState,useEffect,useContext } from 'react'
import { Usercontext } from '../context/contextapi';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { TrashSimple } from 'phosphor-react';
import { Link } from 'react-router-dom';
function Cart()
{
    const [total,setTotal]=useState(0)
    const {user,cart,setCart}=useContext(Usercontext)
    const userinfo=JSON.parse(localStorage.getItem("userinfo"));
   async function removefromcart(pid)
   {
        // console.log(pid)
        const x=cart.filter((item)=> item._id!==pid)
        // console.log(x);
        
        let options={
            method:"PUT",
            headers:
            {
                "token":userinfo.token,
                "Content-type":"application/json"
            },
            body:JSON.stringify({  "userId":userinfo._id,
            "products": x    
       })     
       }
        const res=await fetch(`http://localhost:5000/api/cart/`,options);
        const data= await res.json();
        if(res.status===200)
        {
            setCart(x);  
        }
    //    console.log(data)
    }
    useEffect(()=>
    {
        var sum=0;
        for(let i of cart)
        {
            sum=sum+(i.productid.price*i.quantity)  
        }
        setTotal(sum)
    },[cart])

    return(
        
    <div className='absolute top-[4.2rem] right-5 text-black bg-white w-[380px] p-4 gap-4  z-50  flex flex-col flex-wrap'>
        <div>
            
                <h1 className='font-bold text-black text-center text-lg'>{cart.length==0 ?("No product in your cart"):("Products in your cart")}</h1>   
            
            
        </div>
        <div className='gap-4 flex flex-col'>
            {
                cart.map((item,index) =>
                (
                    
                    
                     <div className='flex gap-2  border border-black p-2 text-gray-600'>
                        <div className='w-[15%]'>
                        <Link key={item.productid._id} to={`/product/${item.productid._id}`}><img className='object-cover' src={item.productid.img} alt="carticon" /></Link>
                        </div>
                        <div className='flex flex-col gap-1 w-[85%] '>
                            <h2 className='font-bold'>{item.productid.title}</h2>
                            <div className='flex w-full justify-end items-end'>
                              <TrashSimple onClick={ () => removefromcart(item._id)} size={32} color="#819c16" />
                            </div>
                            
                                                               
                            <h1 className='font-bold'>{item.quantity}*₹{item.productid.price}</h1>
                        </div>
                    </div>
                    
            ))
            }
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between font-bold'>
                <h2>SUBTOTAL</h2>
                <span>₹ {total}</span>
                </div>
                <button className='bg-blue-500 text-white px-3 py-1 '>PROCEED TO CHECKOUT</button>
                 <h2 className='text-center  text-blue-500'>Reset cart</h2>
            </div>
        </div>
        
    </div>
    )
}
export default Cart