import React from 'react' 
import { Link } from 'react-router-dom'
function Card({item})
{
    
    return(
        
        <Link className='  w-[300px] sm:w-[400px] m-auto aspect-square bg-white rounded-2xl hover:scale-105 shadow-lg  mt-10  transform translate duration-500  ' to={`/product/${item._id}`} >  
        <div className=' border border-gray-100   relative w-full h-full overflow-hidden rounded-2xl '>
        {/* {
                item.isnew&& <h2 className='bg-gray-100 top-1 z-50 absolute rounded-sm px-1 border border-gray-500'>New Product</h2>
        }    */}
            <img className='object-contain absolute w-full h-full hover:z-[1]   z-[3]' src={item.img} /> 
            {/* <img className='object-cover absolute w-full h-full z-[2]' src={item.img2} />  */}
            
        </div>
        <div className='bg-white rounded-2xl'>
            <div className='ml-3'>
               <h2 className='font-bold sm:text-3xl text-[1.3vw] text-gray-500 overflow-hidden whitespace-nowrap'>{item.title}</h2>
            </div>
            <div className='flex gap-5 ml-10'>
               <h3 className='line-through sm:text-2xl text-[1.3vw]'>₹{item.price}</h3>
               <h3 className='font-bold sm:text-2xl text-[1.3vw]'>₹{item.price}</h3>
            </div>
        </div>      
    </Link>

    )
}
export default Card