import React,{useState,useEffect,useContext} from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import FeaturedProducts  from "../components/FeaturedProducts"
import Categories from "../components/Categories"
import axios from "axios"
import { Usercontext } from "../context/contextapi"
import Banner from "../components/Banner"
import Services from "../components/Services"
import CardSlider from "../components/CardSlider"
import Marqueedisplay from "../components/Marquee"

import laptop from "../assets/images/laptop.jpg"
import earphone from "../assets/images/earphone.jpg"
import headphone from "../assets/images/headphone.jpg"
import speaker from "../assets/images/speaker.jpg"
import tv from "../assets/images/tv.jpg"
import tablet from "../assets/images/tab3.jpg"
import phones from "../assets/images/tab3.jpg"

import homedecor1 from "../assets/images/homedecor/homedecor1.jpg"
import homedecor2 from "../assets/images/homedecor/homedecor2.jpg"
import homedecor3 from "../assets/images/homedecor/homedecor3.jpg"
import homedecor4 from "../assets/images/homedecor/homedecor4.jpg"
import homedecor5 from "../assets/images/homedecor/homedecor5.jpg"
import homedecor6 from "../assets/images/homedecor/homedecor6.jpg"
import homedecor7 from "../assets/images/homedecor/homedecor7.jpg"
import homedecor8 from "../assets/images/homedecor/homedecor8.jpg"
function Home()
{
    // const {user,cart,setCart}=useContext(Usercontext)
    const slides1=[
        {
            id:1,
            img:"https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UL480_FMwebp_QL65_.jpg",
            title:"High Performance laptops",
            discount:"30%",
            route:"laptops"
        },
        {
            id:2,
            img:"https://m.media-amazon.com/images/I/71zcrJSdOfL._SX522_.jpg",
            title:"Best Selling speakers",
            discount:"30%",
            route:"speakers"
        }
        ,
        {
            id:3,
            img:"https://m.media-amazon.com/images/I/31ja3BpXlGL._SY445_SX342_QL70_FMwebp_.jpg",
            title:"Super deals on phones",
            discount:"30%",
            route:"phones"
        },
        {
            id:4,
            img:"https://m.media-amazon.com/images/I/61F5SXdi9jL._SX522_.jpg",
            title:"high bass, super comfortabletle",
            discount:"30%",
            route:"headphones"
        },
        {
            id:5,
            img:"https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UY327_FMwebp_QL65_.jpg",
            title:"Audio Days",
            discount:"30%",
            route:"earphones"
        },
        {
            id:6,
            img:"https://m.media-amazon.com/images/I/81Y8+2cuWEL._SX679_.jpg",
            title:"Best in class televisions",
            discount:"tv"
        },
        {
            id:7,
            img:"https://m.media-amazon.com/images/I/71VbHaAqbML._SX679_.jpg",
            title:"tabletlets for your daily activities",
            discount:"tablets"
        }
    ]
    const slides2=[
        {
            id:1,
            img:homedecor1,
            route:"homedecor"
           
        },
        {
            id:2,
            img:homedecor2,
            route:"homedecor" 
        },
        {
            id:3,
            img:homedecor3,
             route:"homedecor"
        },
        {
            id:4,
            img:homedecor4,
            route:"homedecor"
        },
        {
            id:5,
            img:homedecor5,
            route:"homedecor"
        },
        {
            id:6,
            img:homedecor6,
            route:"homedecor"
        },
        {
            id:7,
            img:homedecor7,
             route:"homedecor"
        },
        {
            id:8,
            img:homedecor8,
            route:"homedecor"
        }
    ]
    const slides3=[
        
        {
            id:1,
            img:"https://m.media-amazon.com/images/I/71z3SggPs5L._AC_UL480_FMwebp_QL65_.jpg",
            title:"Jeans For Men",
            discount:"30%",
            route:"menjeans"
           
        },
        {
            id:3,
            img:"https://m.media-amazon.com/images/I/41e8jESEfUL._AC_UL480_FMwebp_QL65_.jpg",
            title:"Jeans For Women",
            discount:"30%",
            route:"womenjeans"
        },
        {
            id:2,
            img:"https://m.media-amazon.com/images/I/71+4qkmVWQL._AC_UL480_FMwebp_QL65_.jpg",
            title:"Shirts For Men",
            discount:"30%",
            route:"menshirts"
        },
        {
            id:4,
            img:"https://m.media-amazon.com/images/I/71nZ497gYtL._AC_UY327_FMwebp_QL65_.jpg",
            title:"Mens's Accessories",
            discount:"30%",
            route:"accessories"
        },
        {
            id:8,
            img:"https://m.media-amazon.com/images/I/61oDtsju8tL._AC_UL480_FMwebp_QL65_.jpg",
            title:"Cosmetics",
            discount:"30%",
            route:"cosmetics"
        },
        {
            id:5,
            img:"https://m.media-amazon.com/images/I/718kaRUCFlL._AC_UL480_FMwebp_QL65_.jpg",
            title:"Jackets for Women",
            discount:"30%",
            route:"jacketwomen"
        },
        {
            id:6,
            img:"https://m.media-amazon.com/images/I/612ODy-WcvL._AC_UL480_FMwebp_QL65_.jpg",
            title:"Sale on Kurtis",
            discount:"30%",
            route:"kurtis"
        },
        {
            id:9,
            img:"https://m.media-amazon.com/images/I/81Pk4RiSKqL._AC_UL480_FMwebp_QL65_.jpg",
            title:"Shoes",
            discount:"30%",
            route:"shoes"
        },
        {
            id:7,
            img:"https://m.media-amazon.com/images/I/71AYPbuBrhL._AC_UL480_FMwebp_QL65_.jpg",
            title:"Bumper Sale on sarees",
            discount:"30%",
            route:"saree"
        },
        
    ]

    const {user,cart}=useContext(Usercontext)
  useEffect(() =>
  {
  },[user])
    // console.log(user,cart)
    return(
    <>
    {
        user!={}?(<><Navbar />
        <Banner />
        <Services />
        <Marqueedisplay />
        {/* <Slider /> */}
        <Categories />
        <CardSlider slides={slides1} title="Appliances" />
        <CardSlider slides={slides3} title="Clothings"/>
        <CardSlider slides={slides2} title="Home decoration"/>
        <FeaturedProducts title="Clothings" />
        <Services />
        <Footer /></>):(<h1>Loading</h1>)
    }
    
    </>
    )
}

export default Home