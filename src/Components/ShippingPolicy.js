import React from 'react'

import {LiaShippingFastSolid} from 'react-icons/lia' 
import {AiOutlineCustomerService} from 'react-icons/ai'
import {MdOutlinePolicy} from 'react-icons/md'
import {MdMiscellaneousServices} from 'react-icons/md'



const ShippingPolicy = () => {
  return (
    <div className='w-[100%] mt-14 mb-20 bg-[#C8DBD7] py-10'>               
        <div className='grid grid-cols-4 mx-auto w-[85%]  '>
          <div className='flex justify-evenly items-center cursor-pointer '>         
            <LiaShippingFastSolid fill='#3C5556' className='text-4xl'/>
            <div>
              <h3 className='font-bold '>Free Shipping</h3>
              <p className='text-center'>Lorem Ipsum is simply dummy </p>
            </div>
          </div>
          <div className='flex justify-evenly items-center cursor-pointer'>         
            <MdOutlinePolicy fill='#3C5556' className='text-4xl'/>
            <div>
              <h3 className='font-bold '>Quality Products</h3>
              <p className='text-center'>Lorem Ipsum is simply dummy </p>
            </div>
          </div>
          <div className='flex justify-evenly items-center cursor-pointer'>         
            <AiOutlineCustomerService fill='#3C5556' className='text-4xl'/>
            <div>
              <h3 className='font-bold '>Customer Support</h3>
              <p className='text-center'>Lorem Ipsum is simply dummy </p>
            </div>
          </div>
          <div className='flex justify-evenly items-center cursor-pointer'>         
            <MdMiscellaneousServices fill='#3C5556' className='text-4xl'/>
            <div>
              <h3 className='font-bold '>24/7 Services</h3>
              <p className='text-center'>Lorem Ipsum is simply dummy </p>
            </div>
          </div>
          
          </div>
    </div>
  )
}

export default ShippingPolicy