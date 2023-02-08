import React from 'react' 
import Marquee from "react-fast-marquee";
import brand1 from "../assets/images/logo/brand-01.png"
import brand2 from "../assets/images/logo/brand-02.png"
import brand3 from "../assets/images/logo/brand-03.png"
import brand4 from "../assets/images/logo/brand-04.png"
import brand5 from "../assets/images/logo/brand-05.png"
import brand6 from "../assets/images/logo/brand-06.png"
import brand7 from "../assets/images/logo/brand-07.png"
import brand8 from "../assets/images/logo/brand-08.png"
function Marqueedisplay()
{
    return(
    <>
    <Marquee className='w-[90%] m-auto  bg-gray-300 my-10 flex gap-4'>
        <img src={brand1}  className="mx-4 w-20" />
        <img src={brand2}  className="mx-4 w-20" />
        <img src={brand3}  className="mx-4 w-20" />
        <img src={brand4}  className="mx-4 w-20" />
        <img src={brand5}  className="mx-4 w-20" />
        <img src={brand6}  className="mx-4 w-20" />
        <img src={brand7}  className="mx-4 w-20" />
        <img src={brand8}  className="mx-4 w-20" />
    </Marquee>
    </>
    )
}
export default Marqueedisplay