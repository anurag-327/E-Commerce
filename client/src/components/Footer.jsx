import React from 'react'
import {Link} from "react-router-dom" 
function Footer()
{
    return(
    
    <footer className='sm:mx-10 mx-48 my-20  justify-evenly text-gray-500  flex flex-col gap-5  '>
        <div className='flex'>       
        <div className='flex gap-20 w-[50%]'>
            <div>
                  <span className='text-black font-bold'>Categories</span>
                  <ul>
                       <li><Link to="/products/1">Women</Link></li>
                       <li><Link to="/products/1">Men</Link></li>
                       <li><Link to="/products/1">Kids</Link></li>
                       <li> <Link to="/products/1">Accessories</Link></li>
                       <li> <Link to="/products/1">New Arrival</Link></li>
                  </ul>
            </div>
            <div>
            <span className='text-black font-bold'>Links</span>
                  <ul>
                      <li><Link to="/products/1">FAQ</Link></li>
                       <li><Link to="/products/1">Pages</Link></li>
                       <li><Link to="/products/1">Stores</Link></li>
                       <li> <Link to="/products/1">Compare</Link></li>
                  </ul>
            </div>
            
        </div>
       <div className='w-[50%]'>
           <div className='text-black flex gap-5'>
               <div>
                    <span className='font-bold'>About</span>
                    <p>Lorem ipsum dolorim voluptate, id quas libero voluptatibus eum totam laboriosam suscipit, neque quo!</p>
               </div>
               <div>
                    <span className='text-black font-bold'>Contact</span>
                    <p>Lorem ipsum dolor quas libero voluptatibus eum totam laboriosam suscipit, neque quo!</p>
               </div>
            </div>
            <div>

            </div>
        </div>
        </div>
        <div className='flex justify-evenly align-center'>
            <div className='text-black mt-6 font-bold align-center text-center'>
                <h3>M-Store © copyright 2023 All Rights Reserved</h3>
            </div>
            <div>
                <img className='w-full' src="../../public/images/payment.png" alt="paymentoptions" />
            </div>
        </div>
    </footer>

    )
}
export default Footer