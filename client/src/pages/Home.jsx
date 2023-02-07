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
function Home()
{
    const {user,cart}=useContext(Usercontext)
    // console.log(user,cart)
    return(
    <>
    <Navbar />
    <Banner />
    <Services />
    {/* <Slider /> */}
    <CardSlider />
    <FeaturedProducts title="Featured Products" />
    <Marqueedisplay />
    <Categories />
    {/* <FeaturedProducts title="Trending Products" /> */}
    <Footer />
    </>
    )
}

export default Home