import React, {useState} from 'react' 
import { useParams } from 'react-router-dom'
import List from './Lists';
function Productsdisplay()
{
    const id=useParams().id;
    // console.log(id)
    const [maxprice,setmaxprice]=useState(1000)
    const [sortby,setsortby]=useState(null)
    
    return(
        <div className="flex m-10 gap-5 min-h-[80vh] ">
          <div  className='flex w-[20%] h-full  flex-col gap-3'>
            <div className=''>
                 <h1 className='font-bold'>Product Catogories</h1>
                 <div className='flex gap-1'>
                     <input type="checkbox" id="hat" />
                     <label htmlFor="hat">Hat</label>
                 </div>  
                 <div className='flex gap-1'>
                     <input type="checkbox" id="shoes" />
                     <label htmlFor="shoes">Shoes</label>
                 </div>  
                 <div className='flex gap-1'>
                     <input type="checkbox" id="tshirt" />
                     <label htmlFor="tshirt">T-Shirt</label>
                 </div> 
             </div>
             <div>
                  <h2 className='font-bold'>Filter By Price</h2>
                  <div className='flex gap-1'>
                    <span>0</span>
                    <input type="range" min="0" max="1000" onChange={(e) => setmaxprice(e.target.value)}/>
                    <span>{maxprice}</span>
                  </div>
            </div> 
            <div>
                <h2 className='font-bold'>Sort By</h2>
                <div className='flex gap-1'>
                    <input type="radio" id="dec" name="sortby" onChange={ e =>setsortby("dec")}/>
                     <label htmlFor="dec">Price(High to Low)</label>
                </div>  
                <div className='flex gap-1'>
                    <input type="radio" id="asc" name='sortby' onChange={e =>setsortby("asc")} />
                    <label htmlFor="asc">Price(Low to High)</label>
                 </div> 
            </div>

        </div> 
        <div className='w-[80%]  flex flex-col gap-10 '>
           <img className=' rounded-2xl object-c   transform translate duration-500  w-full h-full' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/ggd/feb/GGD_Banner_1500x300_feb_WD.jpg" alt="banner" />
           <List  category={id} sort={sortby} maxprice={maxprice } />
        </div>
     </div>
    )
}
export default Productsdisplay