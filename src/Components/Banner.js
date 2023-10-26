import React from 'react'
// import Image from './ImageComp'
import imgHeroSection from "./../images/banner1.jpg"
import styled from 'styled-components'
const Banner = (props) => {

  const BannerImg = styled.img`
    height:  600px;
    object-fit: cover;
    object-position: center;

    @media(max-width:768px){
      height:  400px;
      object-fit: cover;
      object-position: center;
    }
  `
  return (
 

    <>
    {/* <div className='relative'>   
        <Image img = {props.img}>
         <h1 className='absolute top-9'>uyfykuyfiuufyu</h1>
        </Image>    
    </div> */}
    <div className='mx-auto relative w-[100%]'>
        <BannerImg src = {imgHeroSection} alt='' className='w-[100%]' />    
        <h1 className='absolute md:top-[30%] md:left-[42%] left-[25%] top-5 bg-[#c8dbd7c5] md:py-10 text-4xl  md:px-10 py-3 px-4'>About Us</h1>
    </div></>

  )
}

export default Banner