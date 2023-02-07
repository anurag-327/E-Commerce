import React, { useState } from 'react' 
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import {ShoppingCart} from "phosphor-react"
import {MagnifyingGlass} from "phosphor-react"
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
function Navbar()
{
    const[opencart,setopencart]=useState(false)
    return(
    <>
    <nav className=' w-full flex flex-col gap-1 p-2 justify-between align-center bg-gray-900 text-white shadow-md'>
        {/* <div className=' text-start px-5'>Free Shipping for order above 999</div> */}
        {/* <hr className='w-full h-px bg-gray-300 rounded-md'/> */}
        <div className='w-full flex  justify-evenly items-center gap-3 px-2'>
            <div className='flex  sm:w-[100%] gap-2 justify-center items-center'>
                <span className='text-[2vw] '>Amazon.in</span>
                <div className='w-[60vw] flex  '>
                   <input className='px-2 w-full text-black py-2 rounded-bl-md  rounded-tl-md' type="text" placeholder='Search product or more' />
                   <div className='bg-orange-400 p-2 rounded-br-md  rounded-tr-md'>
                      <MagnifyingGlass size={30} color="#000000" weight="bold" />
                   </div>
                   {/* <div>
                       <i className="fa-solid fa-bars ml-5 mt-2 text-2xl hidden sm:inline-block text-white"></i>
                   </div> */}
                </div>
            </div>
            <div className='flex  gap-4'>
                <div>
                    <span className='text-sm'>Hello,Sign in</span>
                    <p className='font-semibold'>Accoount & Lists</p>
                </div>
                <div>
                    <span className='text-sm'>Returns</span>
                    <p className='font-semibold '>& Orders</p>
                </div>
                <div onClick={() => setopencart(!opencart)} className='relative'>
                    <ShoppingCart size={50} color="#ffffff" weight="fill" />
                    <div className='absolute top-2 left-5  '>
                         <span className='font-bold text-black'>0</span>
                    </div>
                </div>
            </div>
        </div>
        {
             opencart&&<Cart />
        }
                   
    </nav>
    </>
    )
}
export default Navbar