import React from 'react'
import pLink from '../data/homeData' 
import HeadingPara from './HeadingPara'
const ProductServices = () => {

  const productItems = pLink.map(
    (d, i) => {
      return ( 
        <ServiceItems img = {d.img} title = {d.title} describe = {d.describe} key = {d.id} id = {d.id} />
      )
    }
  )

  return (
    <div className=' bg-[#C8DBD7] py-10 my-10 '>
      <div className='text-center'>
      <HeadingPara heading = {"From Exterior To Internal Giving Your Home a New Style Every Style"} />
      </div>
      
      <div className='grid md:grid-cols-4 grid-cols-2 gap-4 w-[80%]  container mx-auto mt-7 text-center'>
        {productItems}
      </div>    
    </div>
  )
}

const ServiceItems = ({img, title, describe }) =>{
  return(    
      <div className=' p-5 mx-auto shadow-xl cursor-pointer rounded-xl bg-[#C8DBD7]  text-black hover:transition hover:duration-700 pointer'>
          {img}
          <h2 className='font-semibold my-2'>{title}</h2>
          <p>{describe}</p> 
      </div>
  )
}
export default ProductServices 