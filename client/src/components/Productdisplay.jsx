import React from 'react' 
import { useState,useEffect,useContext } from "react"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import { useParams } from 'react-router-dom'
import { Usercontext } from '../context/contextapi';
function Productdisplay()
{
    const {user,cart,setCart}=useContext(Usercontext)
    const id=useParams().id;
    const [imageselected,setimageselected]=useState(0)
    const[unitselected,setunitselected]=useState(1)
    const [Product,setProduct]=useState([])
   
    const images=[
        `${Product.img}`,
        `${Product.img2}`
    ]
    async function addtocart()
    {
        let val=cart.products;
        val.push({"productid":`${id}`,"quantity":`${unitselected}`})
        console.log(val)
        console.log(cart)
        if(cart!=[])
        {
            console.log(cart._id)
            
            let val=cart.products;
            console.log(val)
            val.push({"productid":`${id}`,"quantity":`${unitselected}`})
            
            let options={
                method:"PUT",
                headers:
                {
                    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDk0OTEwOGQxNjFlNWEwOTZjZWM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY1ODUxOCwiZXhwIjoxNjc1OTE3NzE4fQ.3-Dv3Tpy-Dhf-3yvWNPu1t2IyeqbcXF2HGWi5bNavW8",
                    "Content-type":"application/json"
                },
                body:JSON.stringify({ products: val})     
           }
            
            const res=await fetch(`http://localhost:5000/api/cart/${cart._id}`,options);
            const data= await res.json();
           
        }
        else{
          
            let options={
                method:"POST",
                headers:
                {
                    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDk0OTEwOGQxNjFlNWEwOTZjZWM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY1ODUxOCwiZXhwIjoxNjc1OTE3NzE4fQ.3-Dv3Tpy-Dhf-3yvWNPu1t2IyeqbcXF2HGWi5bNavW8",
                    "Content-type":"application/json"
                },
                body:JSON.stringify({  "userId":"63d949108d161e5a096cec74",
                "products": [
                       {
                          "productid":`${Product._id}`,
                           "quantity":`${unitselected}`
                       }
                   ]     
           })
            }
            const res=await fetch(`http://localhost:5000/api/cart`,options);

            const data= await res.json();
           
    }
    }
    useEffect(() =>
    {
        (async function (){
            const options={
                method:"GET",
                headers:{
                    'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDk0OTEwOGQxNjFlNWEwOTZjZWM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY1ODUxOCwiZXhwIjoxNjc1OTE3NzE4fQ.3-Dv3Tpy-Dhf-3yvWNPu1t2IyeqbcXF2HGWi5bNavW8'
                }
            }
            const res=await fetch(`http://localhost:5000/api/products/find/${id}`,options);
            const data=await res.json();
            setProduct(data)              
        }());        
    },[])

    return(
    <div className='flex mx-10 my-10 gap-5'>
        <div className='flex gap-4 w-[60%]'>
            <div className='flex flex-col gap-2'>
                <img className='w-[6rem]'  src={images[0]} alt="image 1" onClick={(e) => setimageselected(0)} />
                <img className='w-[6rem] ' src={images[1]} alt="image 1" onClick={(e) => setimageselected(1) }/>
            </div>
            <div className=' w-[70%] h-[30rem]'>
                <img className='object-contain w-full h-full' src={images[imageselected]} alt="main image" />
            </div>
        </div>
        <div className='flex flex-col gap-4 w-[60%]'>
             <h3 className='font-bold text-lg'>{Product.title}</h3>
             <span>₹{Product.price}</span>
             <p>{Product.desc}</p>
            <div className=' '>
                 <button onClick={(e) => setunitselected(unitselected===1?1:unitselected-1)} className='cursor-pointer px-2 justify-center font-bold bg-gray-300 align-center border border-black'>-</button>
                 <span className='px-2'>{unitselected}</span>
                 <button onClick={(e) => setunitselected(unitselected===5?5:unitselected+1)} className='cursor-pointer px-2 font-bold justify-center bg-gray-300 align-center border border-black'>+</button>
            </div>   
            <div>
                <button onClick={addtocart} className='bg-blue-600 px-4 py-1 rounded-md text-white'><ShoppingCartOutlinedIcon />ADD TO CART</button>
            </div> 
            <div className='flex gap-4 text-blue-600'>
                <button><FavoriteBorderIcon /> Add to wishlist</button>
                <button><BalanceOutlinedIcon /> Add to Compare</button>
            </div>
            <div className='my-5 text-gray-600'>
                <h3>Vendor : Polo</h3>
                <h3>Product Type :Tshirt </h3>
                <h3>Tags : </h3>
            </div>
            <hr className='h-[2px] rounded-md bg-gray-300' />
            <div className='text-gray-600 flex flex-col gap-3'>   
               <div>
                   <h2 className='capitalize text-black font-bold'>DESCRIPTION</h2>
                   <span>{Product.desc}</span>
                   <hr className='h-[2px] w-[25%] rounded-md bg-gray-300' />
               </div>
               <div>
                   <h2 className='capitalize  text-black font-bold'>ADDITIONAL INFORMATION</h2>
                   <hr className='h-[2px] w-[25%] rounded-md bg-gray-300' />
               </div>
               <div>
                   <h2 className='capitalize  text-black font-bold'>FAQ</h2>
               </div>
               </div>
            </div>
    </div>
    )
}
export default Productdisplay