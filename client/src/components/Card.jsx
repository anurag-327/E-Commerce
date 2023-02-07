import React from 'react' 
import { Link } from 'react-router-dom'
function Card({item})
{
    
    return(
        
        <Link className='w-[40%] hover:scale-105  mt-20  transform translate duration-500 ' to={`/product/${item._id}`} >  
        <div className=' border border-gray-100 shadow-lg  relative w-full h-full overflow-hidden rounded-lg '>
        {
                item.isnew&& <h2 className='bg-gray-100 top-1 z-50 absolute rounded-sm px-1 border border-gray-500'>New Product</h2>
        }   
            <img className='object-contain absolute w-full h-full hover:z-[1]   z-[3]' src={item.img} /> 
            {/* <img className='object-cover absolute w-full h-full z-[2]' src={item.img2} />  */}
            
        </div>
        <div>
            <div>
               <h2 className='font-bold text-gray-500'>{item.title}</h2>
            </div>
            <div className='flex gap-5'>
               <h3 className='line-through'>₹{item.price}</h3>
               <h3 className='font-bold'>₹{item.price}</h3>
            </div>
        </div>      
    </Link>

    )
}
export default Card