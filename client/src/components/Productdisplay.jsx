import React from 'react' 
import { useState } from "react"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
function Productdisplay()
{
    const [imageselected,setimageselected]=useState(0)
    const[unitselected,setunitselected]=useState(1)
    const images=[
        "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    ]
    return(
    <div className='flex mx-10 my-10 gap-5'>
        <div className='flex gap-4 w-[40%]'>
            <div className='flex flex-col gap-2'>
                <img className='w-[6rem]'  src={images[0]} alt="image 1" onClick={(e) => setimageselected(0)} />
                <img className='w-[6rem] ' src={images[1]} alt="image 1" onClick={(e) => setimageselected(1) }/>
            </div>
            <div className=' w-[70%] h-[30rem]'>
                <img className='object-cover w-full h-full' src={images[imageselected]} alt="main image" />
            </div>
        </div>
        <div className='flex flex-col gap-4 w-[60%]'>
             <h3 className='font-bold text-lg'>Long Full Sleeve Graphic Tshirt</h3>
             <span>₹999</span>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Omnis labore dignissimos itaque, fuga, minus, doloribus 
                possimus dolore sit amet repellendus ipsa quod distinctio 
                magni perspiciatis quidem veniam quia soluta neque laudantium?
                 Ipsum quae alias 
                incidunt! At tempora doloribus vero. Neque!</p>
            <div className=' '>
                 <button onClick={(e) => setunitselected(unitselected===1?1:unitselected-1)} className='cursor-pointer px-2 justify-center font-bold bg-gray-300 align-center border border-black'>-</button>
                 <span className='px-2'>{unitselected}</span>
                 <button onClick={(e) => setunitselected(unitselected===5?5:unitselected+1)} className='cursor-pointer px-2 font-bold justify-center bg-gray-300 align-center border border-black'>+</button>
            </div>   
            <div>
                <button className='bg-blue-600 px-4 py-1 rounded-md text-white'><ShoppingCartOutlinedIcon />ADD TO CART</button>
            </div> 
            <div className='flex gap-4 text-blue-600'>
                <button><FavoriteBorderIcon /> Add to wishlist</button>
                <button><BalanceOutlinedIcon /> Add to Compare</button>
            </div>
            <div className='my-5 text-gray-600'>
                <h3>Vendor : Polo</h3>
                <h3>Product Type :Tshirt </h3>
                <h3>Tags : Tshirt, men</h3>
            </div>
            <hr className='h-[2px] rounded-md bg-gray-300' />
            <div className='text-gray-600 flex flex-col gap-3'>   
               <div>
                   <h2 className='capitalize'>DESCRIPTION</h2>
                   <hr className='h-[2px] w-[25%] rounded-md bg-gray-300' />
               </div>
               <div>
                   <h2 className='capitalize'>ADDITIONAL INFORMATION</h2>
                   <hr className='h-[2px] w-[25%] rounded-md bg-gray-300' />
               </div>
               <div>
                   <h2 className='capitalize'>FAQ</h2>
               </div>
               </div>
            </div>
    </div>
    )
}
export default Productdisplay