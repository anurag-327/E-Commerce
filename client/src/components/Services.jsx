import React from 'react' 

import services1 from "../assets/images/services/service-01.png"
import services2 from "../assets/images/services/service-02.png"
import services3 from "../assets/images/services/service-03.png"
import services4 from "../assets/images/services/service-04.png"
import services5 from "../assets/images/services/service-05.png"
function Services()
{
    return(
    <>
    <div className='flex justify-between my-2/services  sm:gap-2 items-center  bg-gray-200 p-3'>
        <div className='flex gap-5 sm:gap-2  justify-center items-center'>
            <img className='w-[2vw] h-[2vw]' src={services1} alt="services" />
            <div>
                <h3 className='font-bold text-[1.5vw]'>Free Shipping</h3>
                <p className='text-[1vw]'>for all orders above 999</p>
            </div>
        </div>
        <div className='flex gap-5 sm:gap-2  justify-center items-center'>
            <img className='w-[2vw] h-[2vw]' src={services2} alt="services" />
            <div>
                <h3 className='font-bold text-[1.5vw]'>Daily Surprise Offer</h3>
                <p className='text-[1vw]'>Save upto 50% off</p>
            </div>
        </div>
        <div className='flex gap-5 sm:gap-2  justify-center items-center'>
            <img className='w-[2vw] h-[2vw]' src={services3} alt="services" />
            <div>
                <h3 className='font-bold text-[1.5vw]'>Support 24/7</h3>
                <p className='text-[1vw]'>Chat with our customer care</p>
            </div>
        </div>
        <div className='flex gap-5 sm:gap-2  justify-center items-center '>
            <img className='w-[2vw] h-[2vw]' src={services4} alt="services" />
            <div>
                <h3 className='font-bold text-[1.5vw]'>Affordable Prices</h3>
                <p className='text-[1vw]'>for all orders above 999</p>
            </div>
        </div>
        <div className='flex gap-5 sm:gap-2 justify-center items-center'>
            <img className='w-[2vw] h-[2vw]' src={services5} alt="services" />
            <div>
                <h3 className='font-bold text-[1.5vw]'>Secure Payments</h3>
                <p className='text-[1vw]'>100% Secured Payments</p>
            </div>
        </div>

    </div>
    </>
    )
}
export default Services