import React, { useEffect, useState ,useContext } from 'react' 
import Card from "./Card"
import axios from "axios"
import { Usercontext } from '../context/contextapi';
function FeaturedProducts({title})
{
    const [Products,setProducts]=useState([]);
    const {user,cart,setCart}=useContext(Usercontext)
    // console.log(Products)
    useEffect(() =>
    {
        (async function (){
            const userinfo=JSON.parse(localStorage.getItem("userinfo"));
            const options={
                method:"GET",
                
            }
            const res=await fetch("http://localhost:5000/api/products",options);
            const data=await res.json();
            setProducts(data) 
        }());        
    },[user])
    return(
    <div className='  w-[95%] sm:w-[100%] m-auto shadow-2xl bg-gray-300 p-2 my-20 md:m-10   sm:mx-10 md:mx-10'>
        <div className='flex mx-10 justify-center gap-[4rem]'>
            <div className='w-[30%] ml-10 '>
                <h1 className='text-3xl font-bold'>{title}</h1>
            </div>
            <div>
                <p className='text-gray-600 '>Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Molestias nobis omnis iure 
                    quibusdam quidem delectus minus quasi laborum 
                    dignissimos! Eaque reiciendis quae doloribus vel 
                    iste explicabo officia, non temporibus sit.
                 </p>
            </div> 
        </div>
        {
            Products.length!=0?(<div className='flex flex-wrap gap-4   px-4'>
            {
            Products.map(item => (<Card key={item._id} item={item} />))
            } 
        </div>):(<h1 className='text-center mt-10 text-3xl'>FAILED TO FETCH PRODUCTS</h1>)
        }
        
    </div>
    )
}
export default FeaturedProducts