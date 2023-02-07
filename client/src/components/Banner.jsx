import React from "react";
import banner1 from "../assets/images/main-banner.jpg";
import banner2 from "../assets/images/main-banner-1.jpg";
import minibanner1 from "../assets/images/catbanner-01.jpg";
import minibanner2 from "../assets/images/catbanner-02.jpg";
import minibanner3 from "../assets/images/catbanner-03.jpg";
import minibanner4 from "../assets/images/catbanner-04.jpg";
function Banner() {
  return (
    <>
      <diV className="p-5">
        <div className="flex gap-3">
          <div className="flex relative">
               <div className=" z-10 ">
                  <img className="rounded-md" src={banner2} />
                  <div className="absolute top-[10%] gap-3 p-4 left-2 flex flex-col">
                      <span className="font-semibold text-lg text-red-600">SUPERCHARGED FOR PROS</span>
                      <span className="font-bold text-6xl">iPad S13+ Pro</span> 
                      <span className=" text-md font-semibold">From ₹2500 to ₹ 10000</span> 
                      <button className="w-32 p-1 rounded-lg bg-black text-white hover:bg-orange-200 hover:text-black">BUY NOW</button>
                  </div>   
                </div>
               <div className="absolute">
                  <img className="rounded-md" src={banner1} />
                  <div className="absolute top-[10%] gap-3 p-4 left-2 flex flex-col">
                      <span className="font-semibold text-lg text-red-600">SUPERCHARGED FOR PROS</span>
                      <span className="font-bold text-6xl">iPad S13+ Pro</span> 
                      <span className=" text-md font-semibold">From ₹2500 to ₹ 10000</span> 
                      <button className="w-32 p-1 rounded-lg bg-black text-white hover:bg-orange-200 hover:text-black">BUY NOW</button>
                  </div>   
                </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-4">
               <div className="relative ">
                  <img className="rounded-md" src={minibanner1} />
                  <div className="absolute top-[2%] gap-1 p-4 left-2 flex flex-col">
                      <span className="font-semibold text-red-600">BEST SALE</span>
                      <span className="font-bold text-lg">Laptops Max</span> 
                      <span className="w-[60%] text-sm font-semibold">From ₹25000 to ₹ 100000</span> 
                  </div>   
                </div>
               <div className="relative">
                  <img className="rounded-md" src={minibanner2} />
                  <div className="absolute top-[2%] gap-1 p-4 left-2 flex flex-col">
                      <span className="font-semibold text-red-600">NEW ARRIVAl</span>
                      <span className="font-bold text-lg">Buy IPad Air</span> 
                      <span className="w-[60%] text-sm font-semibold">From ₹25000 to ₹ 100000</span> 
                  </div>  
                </div>
            </div>
            <div className="flex flex-col gap-4">
               <div className="relative">
                  <img className="rounded-md" src={minibanner3} />
                  <div className="absolute top-[2%] gap-1 p-4 left-2 flex flex-col">
                      <span className="font-semibold text-red-600">15% OFF</span>
                      <span className="font-bold text-lg">Smartwatch 7</span> 
                      <span className="w-[60%] text-sm font-semibold">Shop latest brands styles and colours</span> 
                  </div>   
                </div>
               <div className="relative">
                  <img className="rounded-md" src={minibanner4} />
                  <div className="absolute top-[2%] gap-1 p-4 left-2 flex flex-col">
                      <span className="font-semibold text-red-600">BEST SALE</span>
                      <span className="font-bold text-lg">AirPods Max</span> 
                      <span className="w-[60%] text-sm font-semibold">High-Fiedelity playback & ultra low distortaion</span> 
                  </div>  
                </div>
            </div>
            
          </div>
        </div>
      </diV>
    </>
  );
}
export default Banner;
