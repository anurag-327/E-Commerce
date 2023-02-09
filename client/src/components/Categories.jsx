import React from 'react'
import { Link } from 'react-router-dom' 
function Categories()
{        
    return(
    <div className='flex gap-2 mx-10 my-10 mt-24'>
        <div className='w-[25%] flex flex-col gap-2 '>
            <div className='relative rounded-2xl'>
             <img className='w-full rounded-xl object-cover h-64' src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="categories" />  
             <button className='absolute top-[50%] hover:text-white bg-white left-[50%] text-black hover:bg-blue-600 px-2'><Link to="products/sale" >Sale</Link> </button>    
            </div>
            <div className='relative'>
             <img className='w-full rounded-xl object-cover h-64' src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="categories" />    
             <button className='absolute top-[50%] hover:text-white  bg-white left-[50%] text-black hover:bg-blue-600 px-2'><Link to="products/women" >Women</Link> </button>       
            </div>
        </div>
        <div className='w-[25%] relative '>
             <img className='rounded-xl object-cover h-[32.5rem]' src="https://m.media-amazon.com/images/I/61qm+aSzqHL._UY879_.jpg" alt="categories" />   
             <button className='absolute top-[50%] hover:text-white bg-white left-[50%] text-black hover:bg-blue-600 px-2'><Link to="products/kids" >Kids</Link> </button>        
        </div>
        <div className='w-[50%] flex flex-col gap-2  '>
            <div className='flex gap-2'>  
            <div className='relative w-[50%]'>
                 <button className='absolute top-[50%] hover:text-white bg-white left-[50%] text-black hover:bg-blue-600 px-2'><Link to="products/men" >Men</Link> </button>      
                 <img className=' rounded-xl w-full object-cover h-64' src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="categories" />    
            </div>  
            <div className='relative w-[50%]'>
                <img className='rounded-xl w-full object-cover h-64 '  src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="categories" />  
                 <button className='absolute top-[50%] hover:text-white bg-white left-[50%] text-black hover:bg-blue-600 px-2'><Link to="products/accessories" >Accessories</Link> </button>     
            </div>
            </div>
            <div className='relative'>
                 <button className='absolute top-[50%] hover:text-white bg-white left-[50%] text-black hover:bg-blue-600 px-2'><Link to="products/shoes" >Shoes</Link> </button>   
                <img className='rounded-xl w-[100%] object-cover  h-64' src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="categories" />    
            </div>
        </div>
    </div>
    )
}
export default Categories