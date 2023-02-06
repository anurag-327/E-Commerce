import React, { useEffect, useState } from 'react' 
import Card from "./Card"
import axios from "axios"
function FeaturedProducts({title})
{
    const [Products,setProducts]=useState([]);
    const data=[
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Long Sleeve Fraphic T-Shirt",
            isnew:true,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Coat",
            isnew:true,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
              img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Skirt",
            isnew:false,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:5,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
              img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
            const res=await fetch("http://localhost:5000/api/products",options);
            const data=await res.json();
            setProducts(data)
           
        }());        
    },[])
    return(
    <div className=' mx-44 my-20 md:m-10 flex flex-col gap-1 sm:mx-10 md:mx-10'>
        <div className='flex mx-10 justify-center gap-[4rem]'>
            <div className='w-[30%] '>
                <h1 className='text-2xl font-bold'>{title}</h1>
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
        <div className='flex flex-wrap gap-4 px-8'>
            {
            Products.map(item => (<Card key={item._id} item={item} />))
            } 
        </div>
    </div>
    )
}
export default FeaturedProducts