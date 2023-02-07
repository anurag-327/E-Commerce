import React,{useState,useEffect,useContext} from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import FeaturedProducts  from "../components/FeaturedProducts"
import Categories from "../components/Categories"
import axios from "axios"
import { Usercontext } from "../context/contextapi"
import Banner from "../components/Banner"
function Home()
{
    const {user,cart}=useContext(Usercontext)
    console.log(user,cart)
    return(
    <>
    <Navbar />
    <Banner />
    <Slider />
    <FeaturedProducts title="Featured Products" />
    <Categories />
    <FeaturedProducts title="Trending Products" />
    <Footer />
    </>
    )
}

export default Home