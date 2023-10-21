import React from 'react'
import { useContext } from 'react'
import { EcomContext } from '../Context/ContextHolder'

const WishList = () =>  {
    const {wishList,} = useContext(EcomContext)
        const wishListData = wishList.map(
            (d, i) => {
             return   <WishListItem {...d} key={i} index={i} />
            }
        )
    
    
      return (
     
             <>
             <div className=' w-[80%] container grid md:grid-cols-4 grid-cols-2 gap-4 mx-auto mt-10'>
                {wishListData}
             </div>
             
             </>
    
      )
    }
    
    
    const WishListItem = ({productId,  index}) => {
        const {products, addToCart} = useContext(EcomContext)
        const wishListProduct = products.filter(
            (d) => {
                return d.id === productId;
            }
        )

    
        return(
        <div className=' p-5 shadow-xl rounded-xl'>
            {wishListProduct[0].thumbnail}
            <div className='p-2 font-bold'>{wishListProduct[0].title}</div>
            <div className='p-1'>{wishListProduct[0].desc}</div>
            <div className='p-2 font-bold'>Price - ₹{wishListProduct[0].price}</div>
            <div className='flex justify-between gap-3  pt-3 px-2'>
                <button className='btn p-2 w-[250px] font-bold rounded-full bg-[#3C5556] text-white' onClick={() => addToCart(index)}>Add To Cart</button>
            </div>
        </div>
      
        )
    }

export default WishList