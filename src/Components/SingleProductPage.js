import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BiSolidStarHalf} from 'react-icons/bi'
import product1 from './../images/product1.jpg'
import BestSeller from '../Components/BestSeller'
import p1 from './../images/p1.jpg'
import p2 from './../images/p2.jpg'
import p3 from './../images/p3.jpg'
const SingleProductSec = () => {
  return (
    <>
    <div className='w-[80%] mx-auto grid grid-cols-2 gap-6 my-12'>
        <div className='p-5 shadow w-[100%]'>
            <img src= {product1} alt='' />
            <div className='flex justify-between mt-4'>
                <img src= {p1} alt='' className='w-[30%] h-[30%]'/>
                <img src= {p2} alt='' className='w-[30%] h-[30%]'/>
                <img src= {p3} alt='' className='w-[30%] h-[30%]'/>
            </div>
        </div>
        <div className='shadow p-5' >
            <h1 className='text-3xl font-semibold'>Wooden Craft Soffa</h1>
            <p className='text-xl mt-3'>Price- ₹120000/-</p>
            <div className='flex justify-start items-center text-2xl text-[#3C5556] mt-3'>
                <AiFillStar /> <AiFillStar  /> <AiFillStar/> <AiFillStar /> <BiSolidStarHalf className='text-[#3C5556]'/>
            </div>
            <p className='mt-5 justify-start text-md'> <span className='text-xl font-semibold'>Description-</span> <br /> A sofa designed to redefine the way you lounge. Made for trendy homes, this sofa features a modern design that also offers a breakthrough in space management. The seat cushions are removable, so it’s super easy to keep clean. It comes in different options like 1 seater, 2 seater, 3 seater and L-shape sofa. The interchangeable L-shape sofa set comes with rearrangeable seat cushions that give you the freedom to switch up the sectional when your needs change. Use the rearrangeable lounger cushions to arrange this set in a way that best suits your home. The ottoman is perfect for relaxing with your feet up or for extra seating.</p>          
            <div className='flex justify-between items-center gap-4 mt-5'>
                <button className='btn bg-[#3C5556] text-white w-[50%] p-3 text-xl font-semibold'>Buy Now</button>
                <button className='btn bg-[#3C5556] text-white w-[50%] p-3 text-xl font-semibold'>Add To Cart</button>
            </div>
        </div>
    </div>
    <div className='my-14'>
        <BestSeller />
    </div>
    </>
  )
}

export default SingleProductSec