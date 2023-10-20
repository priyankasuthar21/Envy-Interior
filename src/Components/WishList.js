import React from 'react'
import { useContext } from 'react'
import { EcomContext } from '../Context/ContextHolder'
import Navbar from './Navbar'
// import {FaRegHeart} from 'react-icons/fa'
const WishList = () =>  {

    const {wishList,} = useContext(EcomContext)
        const wishListData = wishList.map(
            (d, i) => {
             return   <WishListItem {...d} key={i} index={i} />
            }
        )
    
    
      return (
     
             <>
             <Navbar />
             <div className=' w-[80%] container grid grid-cols-4 gap-4 mx-auto mt-10'>
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
                {/* <FaRegHeart className = {'font-bold text-3xl'} onClick={() => addToWishList(index)} /> */}
                {/* <button className='btn p-2 w-[80px] font-bold rounded-full bg-[#3C5556] text-white' onClick={() => addToWishList(id)}>Like</button> */}
            </div>
        </div>
      
      


            // <div className='w-[80%] p-2 container grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-10 mx-auto   '>
            //     <div className='w-[100px]  mx-auto'>
            //         {wishListProduct[0].thumbnail}
            //     </div>
            //     <div className='shadow text-center pt-5 font-bold'>
            //         <h2 className='mb-2'>{wishListProduct[0].title}</h2>
            //         <p>₹{wishListProduct[0].price}</p>
            //     </div>
               
            //     <div className='text-center pt-5 shadow font-bold'>
            //         <h2 className='text-2xl mb-2'>Total</h2>
            //         <div> ₹{wishListProduct[0].price * qty} </div>
            //     </div>
            // </div>
        )
    }

export default WishList