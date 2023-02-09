import React from "react";
import banner1 from "../assets/images/banner/main-banner.jpg";
import banner2 from "../assets/images/banner/main-banner-1.jpg";
import minibanner1 from "../assets/images/banner/catbanner-01.jpg";
import minibanner2 from "../assets/images/banner/catbanner-02.jpg";
import minibanner3 from "../assets/images/banner/catbanner-03.jpg";
import minibanner4 from "../assets/images/banner/catbanner-04.jpg";
import {Link} from "react-router-dom"
function Banner() {
  return (
    <>
      <div className="p-6">
        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row 2xl:flex-row gap-3">
          <div className="flex relative">
               <Link to="/products/phones" className=" z-10 ">
                  <img className="rounded-md " src={banner2} alt="banner"  />
                  <div className="absolute top-0 gap-2 p-4 left-2 flex flex-col">
                      <span className="font-semibold text-lg text-red-600 text-md sm:text-[3vw]">SUPERCHARGED FOR PROS</span>
                      <span className="font-bold text-[3.5vw] sm:text-[6vw] ">iPad S13+ Pro</span> 
                      <span className=" text-md font-semibold">From ₹45000 to ₹ 10000</span> 
                      <button className="w-32 p-1 rounded-lg bg-black text-white hover:bg-orange-200 hover:text-black">BUY NOW</button>
                  </div>   
                </Link>
                <Link to="products/earphones" className="  absolute ">
                  <img className="rounded-md" src={banner1} alt="banner" />
                  <div className="absolute top-0 gap-2 p-4 left-2 flex flex-col">
                      <span className="font-semibold text-lg text-red-600 text-md sm:text-[3vw]">SUPERCHARGED FOR PROS</span>
                      <span className="font-bold text-[3.8vw] ">iPad S13+ Pro</span> 
                      <span className=" text-md font-semibold">From ₹2500 to ₹ 10000</span> 
                      <button className="w-32 p-1 rounded-lg bg-black text-white hover:bg-orange-200 hover:text-black">BUY NOW</button>
                  </div>   
                </Link>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-4">
               <Link to="/products/laptop" className="relative ">
                  <img className="rounded-md" src={minibanner1} alt="banner" />
                  <div className="absolute top-0 gap-1 p-4 left-0 flex flex-col">
                      <span className="font-semibold text-red-600 text-md sm:text-[3vw]">BEST SALE</span>
                      <span className="font-bold text-lg sm:text-[3vw]">Laptops </span> 
                      <span className="w-[60%] text-[1.2vw] sm:text-[2vw] font-semibold">From ₹25000 to ₹ 100000</span> 
                  </div>   
                </Link>
               <Link to="products/watches" className="relative">
                  <img className="rounded-md" src={minibanner2} alt="banner" />
                  <div className="absolute top-0 gap-1 p-4 left-0 flex flex-col">
                      <span className="font-semibold text-red-600 text-md sm:text-[3vw]">NEW ARRIVAL</span>
                      <span className="font-bold text-lg sm:text-[3vw]">Buy Smartwatches</span> 
                      <span className="w-[60%] text-[1.2vw] sm:text-[2vw] font-semibold">From ₹25000 to ₹ 100000</span> 
                  </div>  
                </Link>
            </div>
            <div className="flex flex-col gap-4">
               <Link to="products/tab" className="relative">
                  <img className="rounded-md" src={minibanner3} alt="banner" />
                  <div className="absolute top-0 gap-1 p-4 left-0 flex flex-col">
                      <span className="font-semibold text-red-600 text-md sm:text-[3vw]  ">UPTO 15% OFF</span>
                      <span className="font-bold text-lg sm:text-[3vw]">Buy IPad Air</span> 
                      <span className="w-[60%] text-[1.2vw] sm:text-[2vw] font-semibold">Shop latest brands styles and colours</span> 
                  </div>   
                </Link>
               <Link to="products/headphones" className="relative">
                  <img className="rounded-md" src={minibanner4} alt="banner" />
                  <div className="absolute top-0 gap-1 p-4 left-0 flex flex-col">
                      <span className="font-semibold text-red-600 text-md sm:text-[3vw]">BEST SALE</span>
                      <span className="font-bold text-lg sm:text-[3vw]">AirPods Max</span> 
                      <span className="w-[60%] text-[1.2vw] sm:text-[2vw] font-semibold">High-Fiedelity playback & ultra low distortaion</span> 
                  </div>  
                </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
