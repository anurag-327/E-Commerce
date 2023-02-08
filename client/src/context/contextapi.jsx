import React from "react";
import { useState,useEffect,createContext,useContext } from "react";

export const Usercontext=createContext();
export default function Userprovider({children})
{
    const [user,setuser]=useState({});
    const [cart,setCart]=useState([]);
        useEffect(()=>
        {
            const userinfo=JSON.parse(localStorage.getItem("userinfo"));
            setuser(userinfo);

            (async function (){
            // const options={
            //     method:"GET",
            //     headers:{
            //         'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDk0OTEwOGQxNjFlNWEwOTZjZWM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY1ODUxOCwiZXhwIjoxNjc1OTE3NzE4fQ.3-Dv3Tpy-Dhf-3yvWNPu1t2IyeqbcXF2HGWi5bNavW8'
            //     }
            // }
            // const res=await fetch(`http://localhost:5000/api/products/find/${id}`,options);
            // const data=await res.json();
            // setProduct(data)
            
          let options2={
            method:"GET",
            headers:
            {
                "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDk0OTEwOGQxNjFlNWEwOTZjZWM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY1ODUxOCwiZXhwIjoxNjc1OTE3NzE4fQ.3-Dv3Tpy-Dhf-3yvWNPu1t2IyeqbcXF2HGWi5bNavW8",
                
            }}
           const rescart=await fetch(`http://localhost:5000/api/cart/find/63d949108d161e5a096cec74`,options2);
           const datacart= await rescart.json();
           if(rescart.status==200 && datacart)
           {
            setCart(datacart)   
           }
                
        }()); 


        },[])
   
    return <Usercontext.Provider value={{user,setuser,cart,setCart}}>{children}</Usercontext.Provider>
}
