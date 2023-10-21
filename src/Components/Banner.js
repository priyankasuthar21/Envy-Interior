import React from 'react'
// import Image from './ImageComp'
import imgHeroSection from "./../images/banner1.jpg"
const Banner = (props) => {
  return (
 

    <>
    {/* <div className='relative'>   
        <Image img = {props.img}>
         <h1 className='absolute top-9'>uyfykuyfiuufyu</h1>
        </Image>    
    </div> */}
    <div className='mx-auto relative w-[100%]'>
        <img src = {imgHeroSection} alt='' className='w-[100%]' />    
        <h1 className='absolute md:top-[30%] md:left-[42%] left-[25%] top-5 bg-[#c8dbd7c5] md:py-10 text-4xl  md:px-10 py-3 px-4'>About Us</h1>
    </div></>

  )
}

export default Banner