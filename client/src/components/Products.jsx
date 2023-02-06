import React, {useState} from 'react' 
import { useParams } from 'react-router-dom'
import List from './Lists';
function Productsdisplay()
{
    const id=useParams().id;
    console.log(id)
    const [maxprice,setmaxprice]=useState(1000)
    const [sortby,setsortby]=useState(null)
    
    return(
        <div className="flex m-10 gap-5 h-[80vw]">
          <div  className='flex w-[25%] h-full  flex-col gap-3'>
            <div className=''>
                 <h1 className='font-bold'>Product Catogories</h1>
                 <div className='flex gap-1'>
                     <input type="checkbox" id="hat" />
                     <label for="hat">Hat</label>
                 </div>  
                 <div className='flex gap-1'>
                     <input type="checkbox" id="shoes" />
                     <label for="shoes">Shoes</label>
                 </div>  
                 <div className='flex gap-1'>
                     <input type="checkbox" id="tshirt" />
                     <label for="tshirt">T-Shirt</label>
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
                     <label for="dec">Price(High to Low)</label>
                </div>  
                <div className='flex gap-1'>
                    <input type="radio" id="asc" name='sortby' onChange={e =>setsortby("asc")} />
                    <label for="asc">Price(Low to High)</label>
                 </div> 
            </div>

        </div> 
        <div className='w-[75%] h-[40vh] flex flex-col gap-10 '>
           <img className=' rounded-md  transform translate duration-500 object-cover w-full h-full' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="banner" />
           <List  category={id} sort={sortby} maxprice={maxprice } />
        </div>
     </div>
    )
}
export default Productsdisplay