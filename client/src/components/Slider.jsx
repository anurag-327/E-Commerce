import React, { useState } from 'react' 
// import { useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
function Slider()
{
    const [currslide,setcurrslide]= useState(0)
    console.log(currslide)
    function prevslide()
    {
        
        setcurrslide(currslide===0? 2: (prev) => prev-1)
    }
    function nextslide()
    {
        
        setcurrslide(currslide===2 ? 0:(prev) => prev+1)
    }
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];
    return(
 
    <div className='w-[98vw]  h-[80vh] relative'>
        <div className='flex h-full transform translate duration-500 ' >
           <img className=' w-full object-cover' src={data[currslide]} alt="photo slider" />
        
        </div>
        <div className='flex justify-center gap-2 relative bottom-10'>
            
            <div className={currslide===1 ? ("text-white border border-white"):("border border-black")} >
                <button  onClick={prevslide}><WestOutlinedIcon /></button>
                
            </div>
            <div className={currslide===1 ? ("text-white border border-white"):("border border-black")} >
                <button onClick={nextslide}><EastOutlinedIcon /></button>

            </div>
        
        </div>
    </div>
    

    )
}
export default Slider