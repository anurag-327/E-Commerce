import React from 'react' 
import Card from "./Card"
import { useState, useEffect } from 'react'
function List(props)
{
    console.log(props.category)
    const [Products,setProducts]=useState([]);
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
            id:2,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
          
            title:"Coat",
            isnew:true,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
             
            title:"Skirt",
            isnew:false,
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

    useEffect(() =>
    {
        (async function (){
            const options={
                method:"GET",
                headers:{
                    'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDk0OTEwOGQxNjFlNWEwOTZjZWM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY1ODUxOCwiZXhwIjoxNjc1OTE3NzE4fQ.3-Dv3Tpy-Dhf-3yvWNPu1t2IyeqbcXF2HGWi5bNavW8'
                }
            }
            const res=await fetch(`http://localhost:5000/api/products?category=${props.category}`,options);
            const data=await res.json();
            setProducts(data)
            console.log(data);
           
        }());        
    },[])

    return(
        <div className='flex flex-wrap  align-center gap-4  px-2'>
        {
        Products.map(item => (<Card key={item.id} item={item} />))
        } 
    </div>
    )
}
export default List