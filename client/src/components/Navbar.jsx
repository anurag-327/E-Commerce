import React, { useState } from 'react' 
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Cart from './Cart';
import { Link } from 'react-router-dom';

function Navbar()
{
    const[opencart,setopencart]=useState(false)
    return(
    <>
    <nav className=' w-full flex gap-2 p-2 justify-between align-center bg-gray-100 shadow-md'>
      <div className='flex gap-2 align-center'>
        <div>
            <span>IND </span>
        </div>
        <div>
            <ArrowDownwardIcon />
        </div>    
      <div className=''>
        <ul className='flex gap-5 text-md'>
            <li><Link to="/products/women">Women</Link></li>
            <li><Link to="/products/men">Men</Link></li>
            <li><Link to="/products/kids">Kids</Link></li>
            <li> <Link to="/products/accessories">Accessories</Link></li>
        </ul>
       </div>
       </div>
       
       <div className=' text-center'>
             <span className='text-2xl'>M-Store</span>
       </div>

       <div className=' flex align-center'>
            <ul className='flex text-md gap-3'>
                <li><Link to="/" >Homepage</Link></li>
                <li> <Link to="/About" >About</Link></li>
                <li><Link to="/Contact" >Contact</Link></li>
                <li><Link to="/Stores" >Stores</Link></li>
                <li className='cursor-pointer'><SearchIcon></SearchIcon></li>
                <li className='cursor-pointer'><PersonOutlinedIcon /></li>
                <li className='cursor-pointer'><FavoriteBorderIcon /></li>
                <li onClick={(e) => setopencart(!opencart)} className='cursor-pointer'>
                    <ShoppingCartOutlinedIcon />
                    <span className='relative px-1 -left-3 -top-1 aliign-center   bg-blue-400 text-white rounded-[100%] '>0</span>
                    {
                        opencart&&<Cart />
                    }
                </li>
            </ul>
       </div>
       </nav>
    </>
    )
}
export default Navbar