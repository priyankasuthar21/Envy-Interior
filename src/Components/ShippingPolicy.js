import React from 'react'

import {LiaShippingFastSolid} from 'react-icons/lia' 
import {AiOutlineCustomerService} from 'react-icons/ai'
import {MdOutlinePolicy} from 'react-icons/md'
import {MdMiscellaneousServices} from 'react-icons/md'



const ShippingPolicy = () => {
  return (
    <div className='w-[100%] mt-14 mb-20 bg-[#C8DBD7] py-10'>               
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 mx-auto w-[85%]  '>
          <div className='flex justify-evenly gap-2 md:items-center cursor-pointer  mb-2 md:mb-0'>         
            <LiaShippingFastSolid fill='#3C5556' className='text-4xl'/>
            <div>
              <h3 className='font-bold '>Free Shipping</h3>
              <p className='lg:text-center'>Lorem Ipsum is simply dummy </p>
            </div>
          </div>
          <div className='flex justify-evenly gap-2  md:items-center cursor-pointer '>         
            <MdOutlinePolicy fill='#3C5556' className='text-4xl'/>
            <div>
              <h3 className='font-bold '>Quality</h3>
              <p className='lg:text-center'>Lorem Ipsum is simply dummy </p>
            </div>
          </div>
          <div className='flex justify-evenly gap-2  md:items-center cursor-pointer'>         
            <AiOutlineCustomerService fill='#3C5556' className='text-4xl'/>
            <div>
              <h3 className='font-bold '>Customer</h3>
              <p className='lg:text-center'>Lorem Ipsum is simply dummy </p>
            </div>
          </div>
          <div className='flex justify-evenly gap-2  md:items-center cursor-pointer'>         
            <MdMiscellaneousServices fill='#3C5556' className='text-4xl'/>
            <div>
              <h3 className='font-bold '>Services</h3>
              <p className='lg:text-center'>Lorem Ipsum is simply dummy </p>
            </div>
          </div>
          
          </div>
    </div>
  )
}

export default ShippingPolicy