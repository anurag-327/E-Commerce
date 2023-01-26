import React from 'react' 
import Card from "./Card"
function FeaturedProducts({title})
{
    const data=[
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Long Sleeve Fraphic T-Shirt",
            isnew:true,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Coat",
            isnew:true,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
              img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Skirt",
            isnew:false,
            oldprice:1500,
            discountprice:999,
        },
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
              img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Saree",
            isnew:false,
            oldprice:1500,
            discountprice:999,
        }
    ]
    return(
    <div className=' mx-52 my-10 flex flex-col gap-10 sm:mx-10 md:mx-10'>
        <div className='flex gap-[8rem]'>
            <div className='w-[30%]'>
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
            <div>
                <p className='text-gray-600 '>Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Molestias nobis omnis iure 
                    quibusdam quidem delectus minus quasi laborum 
                    dignissimos! Eaque reiciendis quae doloribus vel 
                    iste explicabo officia, non temporibus sit.
                 </p>
            </div> 
        </div>
        <div className='flex gap-4 px-16'>
            {
            data.map(item => (<Card item={item} />))
            } 
        </div>
    </div>
    )
}
export default FeaturedProducts