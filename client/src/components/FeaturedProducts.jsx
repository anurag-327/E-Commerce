import React, { useEffect, useState } from 'react' 
import Card from "./Card"
import axios from "axios"
import laptop from "../assets/images/laptop.jpg"
import earphone from "../assets/images/earphone.jpg"
import headphone from "../assets/images/headphone.jpg"
import speaker from "../assets/images/speaker.jpg"
import tv from "../assets/images/tv.jpg"
import tablet from "../assets/images/tab3.jpg"
import phones from "../assets/images/tab3.jpg"
import ProductCategories from './ProductCategories'
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from "swiper"
import 'swiper/css';
import 'swiper/css/free-mode';
import { Scrollbars } from 'react-custom-scrollbars';
function FeaturedProducts({title})
{
    const [Products,setProducts]=useState([]);
    const data=[
        {
            id:1,
            img:laptop,
            title:"High Performance laptops",
            discount:"30%"
        },
        {
            id:2,
            img:earphone,
            title:"Audio Days",
            discount:"30%"
        },
        {
            id:3,
            img:headphone,
            title:"high bass, super comfortable",
            discount:"30%"
        },
        {
            id:4,
            img:speaker,
            title:"Best Selling speakers",
            discount:"30%"
        },
        {
            id:5,
            img:tv,
            title:"Best in class televisions",
            discount:"30%"
        },
        {
            id:6,
            img:tablet,
            title:"Tablets for your daily activities",
            discount:"30%"
        },
        {
            id:7,
            img:phones,
            title:"Super deals on phones",
            discount:"30%"
        },
        {
            id:8,
            img:phones,
            title:"Super deals on phones",
            discount:"30%"
        },
        {
            id:9,
            img:phones,
            title:"Super deals on phones",
            discount:"30%"
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
    <div className=' mx-12 my-20 md:m-10 flex flex-col gap-1 sm:mx-10 md:mx-10'>
        <div className='flex mx-10 justify-center gap-[4rem]'>
            <div className='w-[30%] '>
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div> 
        </div>       
        <div className='flex w-full scrollbar-default overflow-auto  gap-4 '>
            {
            Products.map(item => (<Card key={item.id} item={item} />))
            } 
        </div>
    </div>
    )
}
export default FeaturedProducts