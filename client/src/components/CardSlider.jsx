import React ,{useRef} from 'react' 
import {CaretLeft,CaretRight} from "phosphor-react"
import ProductCategories from './ProductCategories'
import laptop from "../assets/images/laptop.jpg"
import earphone from "../assets/images/earphone.jpg"
import headphone from "../assets/images/headphone.jpg"
import speaker from "../assets/images/speaker.jpg"
import tv from "../assets/images/tv.jpg"
import tablet from "../assets/images/tab3.jpg"
import phones from "../assets/images/tab3.jpg"

function CardSlider()
{
    // const slider=useRef();
    const slides=[1,2,3,4,5,6,7,8,9,10]
    function scrollleft()
    {
        const slider=document.querySelector(".slider")
        slider.scrollLeft-=600;
    }
    function scrollright()
    {
        const slider=document.querySelector(".slider")
        slider.scrollLeft+=600;
    }

    const data=[
        {
            id:1,
            img:tablet,
            title:"High Performance laptops",
            discount:"30%"
        },
        {
            id:2,
            img:tablet,
            title:"Audio Days",
            discount:"30%"
        },
        {
            id:3,
            img:tablet,
            title:"high bass, super comfortabletle",
            discount:"30%"
        },
        {
            id:4,
            img:tablet,
            title:"Best Selling speakers",
            discount:"30%"
        },
        {
            id:5,
            img:tablet,
            title:"Best in class televisions",
            discount:"30%"
        },
        {
            id:6,
            img:tablet,
            title:"tabletlets for your daily activities",
            discount:"30%"
        },
        {
            id:7,
            img:tablet,
            title:"Super deals on phones",
            discount:"30%"
        },
        {
            id:8,
            img:tablet,
            title:"Super deals on phones",
            discount:"30%"
        },
        {
            id:9,
            img:tablet,
            title:"Super deals on phones",
            discount:"30%"
        }
    ]


    return(
    <div className='w-[95%] h-[320px] box-border m-auto bg-white relative flex items-center justify-center '>
        <CaretLeft onClick={scrollleft} className=' cursor-pointer absolute left-0 bg-blue-100 rounded-full p-1' size={36} color="#000000"  />
        <div  className=' slider scroll-smooth w-full h-full  whitespace-nowrap overflow-x-auto scrollbar-hide'>
            {
                 
                 data.map((item,indes) =>
                {
                   return(
                     <div className='w-[300px] mx-3 h-[300px]   mt-3  box bg-gray-300 shadow-xl inline-block rounded-2xl'>
                        <div className='w-full h-[250px]'>
                            <img className='w-full  ' src={item.img} />
                        </div>
                        <div className='flex gap-2 mx-5'>
                            <span className='bg-red-600 text-white  px-2'>Up to {item.discount} off</span>
                            <span className='font-bold text-red-800'>Up to {item.discount} off</span>
                        </div>
                        <div className='mx-5'>
                            <h2>{item.title}</h2>
                        </div>
                     </div>
                     
                   
                   )
                })
            
            }
             
        </div>
        <CaretRight onClick={scrollright} className='cursor-pointer absolute right-0 bg-blue-100 rounded-full p-1' size={36} color="#000000" />
    </div>
    )
}
export default CardSlider
