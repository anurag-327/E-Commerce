import React from 'react' 
import Card from "./Card"
function List()
{
    const data=[
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            
            title:"Long Sleeve Fraphic T-Shirt",
            isnew:true,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
          
            title:"Coat",
            isnew:true,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
             
            title:"Skirt",
            isnew:false,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",

            title:"Saree",
            isnew:false,
            oldprice:1500,
            discountprice:999,
        }
    ]
    return(
        <div className='flex flex-wrap justify-center align-center gap-4  px-5'>
        {
        data.map(item => (<Card item={item} />))
        } 
    </div>
    )
}
export default List