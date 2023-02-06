import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import FeaturedProducts  from "../components/FeaturedProducts"
import Categories from "../components/Categories"
import axios from "axios"
function Home()
{
    return(
    <>
    <Navbar />
    <Slider />
    <FeaturedProducts title="Featured Products" />
    <Categories />
    <FeaturedProducts title="Trending Products" />
    <Footer />
    </>
    )
}

export default Home