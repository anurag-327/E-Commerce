import React from 'react' 
import { Link } from 'react-router-dom'
function SliderCard({item})
{
    return(
    <>
     <div className='w-[300px] mx-2 box-border bg-white shadow-md inline-block rounded-2xl'>
                        <div className='  rounded-lg h-[300px] object-cover'>
                            <img className=' w-full h-[300px] object-contain rounded-2xl   ' src={item.img} />
                        </div>
                        {
                             item.title&&(<Link to={`/products/${item.route}`}> <div className='flex gap-2 mx-5'>
                             <span className='bg-red-600 text-white  px-2'>Up to {item.discount} off</span>
                             <span className='font-bold text-red-800'>Up to {item.discount} off</span>
                         </div>
                         <div className='mx-5'>
                             <h2>{item.title}</h2>
                         </div></Link>)
                        }
                     </div>
    </>
    )
}
export default SliderCard