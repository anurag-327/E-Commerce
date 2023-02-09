import React ,{useRef} from 'react' 
import {CaretLeft,CaretRight, Key} from "phosphor-react"
import ProductCategories from './ProductCategories'
import laptop from "../assets/images/laptop.jpg"
import earphone from "../assets/images/earphone.jpg"
import headphone from "../assets/images/headphone.jpg"
import speaker from "../assets/images/speaker.jpg"
import tv from "../assets/images/tv.jpg"
import tablet from "../assets/images/tab3.jpg"
import phones from "../assets/images/tab3.jpg"
import { Link } from 'react-router-dom'
import SliderCard from './SliderCard'
function CardSlider({slides,title})
{
    // const slider=useRef();
    
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

    

    return(
        <>
        <div className='w-[95%] sm:w-[100%]   m-auto mt-5 mb-2 text-2xl font-bold'>
            <span className='ml-10'>{title}</span>
        </div>
       <div className='w-[95%] sm:w-[100%]    box-border m-auto  relative flex items-center justify-center '>
        <CaretLeft onClick={scrollleft} className=' cursor-pointer absolute left-0 bg-blue-100 rounded-full p-1' size={36} color="#000000"  />
        <div id={title}  className='  slider scroll-smooth w-full h-full  whitespace-nowrap overflow-x-auto scrollbar-hide'>
            {
                 slides.map((item,index) => <SliderCard key={item.id} item={item} />
                )
            }
             
        </div>
        <CaretRight onClick={scrollright} className='cursor-pointer absolute right-0 bg-blue-100 rounded-full p-1' size={36} color="#000000" />
    </div>
    </>
    )
}
export default CardSlider
