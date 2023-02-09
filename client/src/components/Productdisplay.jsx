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
import { useNavigate } from 'react-router-dom';
function Productdisplay()
{
    const navigate=useNavigate();
    const {user,cart,setCart}=useContext(Usercontext)
    const userinfo=JSON.parse(localStorage.getItem("userinfo"));
    const id=useParams().id;
    // console.log(id)
    const [imageselected,setimageselected]=useState(0)
    const[unitselected,setunitselected]=useState(1)
    const [Product,setProduct]=useState([])
    // console.log(Product)
    const images=[
        `${Product.img}`,
        `${Product.img2}`
    ]
    function login()
    {
       navigate("/login")
    }
    async function addtocart()
    {
        let val=cart.products;
        // console.log(val)
        // console.log(cart)
        
        if(cart.length!=0)
        {
            if(!cart.some(item => item.productid._id===id))
            {
                let val=cart;
                val.push({"productid":`${id}`,"quantity":`${unitselected}`})
                let options={
                    method:"PUT",
                    headers:
                    {
                        "token":userinfo.token,
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify({  "userId":userinfo._id,
                    "products": val    
               })     
               }
                console.log(val)
                const res=await fetch(`http://localhost:5000/api/cart`,options);
                const data= await res.json();
                if(res.ok && data)
                {
                    setCart(data)
                }
            }    
        }
        else{
            // console.log("cart empty")
            let options={
                method:"POST",
                headers:
                {
                    "token":userinfo.token,
                    "Content-type":"application/json"
                },
                body:JSON.stringify({  "userId":userinfo._id,
                "products": [
                       {
                          "productid":`${id}`,
                           "quantity":`${unitselected}`
                       }
                   ]     
           })
            }
            const res=await fetch(`http://localhost:5000/api/cart`,options);
            const data= await res.json();
            if(res.ok && data)
            {
                // console.log(data);
                setCart(data)
            }
            // console.log(data)
           
    }
}
// console.log(user)
    useEffect(() =>
    {  
        
        (async function (){
            // console.log(cart.length)
            
            const options={
                method:"GET",
                
            }
            const res=await fetch(`http://localhost:5000/api/products/find/${id}`,options);
            const data=await res.json();
            // console.log(data)
            if(res.status==200)
            setProduct(data)              
        }());        
    },[user])

    return(
        <>
        {
            Product.length!=0?(<div className='flex mx-10 my-10 gap-5'>
            <div className='flex gap-4 w-[60%]'>
                <div className='flex flex-col gap-2'>
                    <img className='w-[6rem]  border-2 border-black'  src={images[0]} alt="image 1" onClick={(e) => setimageselected(0)} />
                    <img className='w-[6rem] border-2 border-black ' src={images[1]} alt="image 1" onClick={(e) => setimageselected(1) }/>
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
                    {
                        user!={}?(<button onClick={addtocart} className='bg-blue-600 px-4 py-1 rounded-md text-white'><ShoppingCartOutlinedIcon />ADD TO CART</button>):(<button onClick={login} className='bg-red-600 px-4 py-1 rounded-md text-white'>LOGIN TO ADD TO CART</button>)
                    }
                    
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
        </div>):(<h1 className='text-4xl text-center my-60'>Failed to load product</h1>)
        }
    </>
    )
}
export default Productdisplay