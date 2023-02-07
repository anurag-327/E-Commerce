import React from 'react' 
import laptop from "../assets/images/laptop.jpg"
import earphone from "../assets/images/earphone.jpg"
import headphone from "../assets/images/headphone.jpg"
import speaker from "../assets/images/speaker.jpg"
import tv from "../assets/images/tv.jpg"
import tab from "../assets/images/tab3.jpg"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
function ProductCategories({item})
{
    var imgsrc=item.img;
    return(
    
    <div className='w-[70%] hover:scale-105 flex flex-col gap-3 justify-center items-center  transform translate duration-500  '  >  
        <div className=' w-[15rem]'>
            <img className='object- w-full m-auto ' src={imgsrc}/>
        </div>
        <div>
            <div>
               <h2 className='font-bold text-gray-500'>{item.title}</h2>
            </div>
            <div className=''>
               <h3 className='line-through'>Upto {item.discount} Off</h3>
               <h3 className='font-bold'>₹{item.title}</h3>
            </div>
        </div>      
    </div>
    
    )
}
export default ProductCategories