import React from "react"
import Productsdisplay from "../components/Products"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import List from "../components/Lists"
import Footer from "../components/Footer"
function Products()
{
    return(
 <>
    <Navbar />
    <Productsdisplay />  
    <Footer />
  </>
    )
}

export default Products