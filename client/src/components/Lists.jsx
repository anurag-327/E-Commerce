import React,{useContext} from 'react' 
import Card from "./Card"
import { useState, useEffect } from 'react'
import { Usercontext } from '../context/contextapi'
function List(props)
{
    // console.log(props.category)
    const {user,cart,setCart}=useContext(Usercontext)
    const [Products,setProducts]=useState([]);
    useEffect(() =>
    {
        
        (async function (){
            const userinfo=JSON.parse(localStorage.getItem("userinfo"));
            const options={
                method:"GET",
                headers:{
                    'token':userinfo.token
                }
            }
            const res=await fetch(`http://localhost:5000/api/products?category=${props.category}`,options);
            const data=await res.json();
            setProducts(data)
            // console.log(data);
           
        }());        
    },[user])

    return(
        <div className='flex flex-wrap  align-center gap-4  px-2'>
        {
        Products.map(item => (<Card key={item._id} item={item} />))
        } 
    </div>
    )
}
export default List