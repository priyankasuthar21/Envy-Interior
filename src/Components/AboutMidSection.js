import React from 'react'
import AboutSection from '../images/aboutsec.jpg'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {AiOutlineMail} from 'react-icons/ai'
import {LiaPhoneSolid} from 'react-icons/lia'
import AboutImg from './../images/Group-4-New.png'
const AboutMidSection = () => {
  return (
    <div className='w-[100%]'>
        <div className='mx-auto relative'>
            <img src = {AboutSection} alt='' className='md:w-[100%]' />    
            <h1 className='absolute md:top-[30%] md:left-[42%] left-[25%] top-5 bg-[#c8dbd7c5] md:py-10 text-4xl  md:px-10 py-3 px-4'>About Us</h1>
        </div>
       
        <div className='mt-10  pt-10 text-center  bg-[#3C5556]' >   
            <div className='py-5'>  
                <h1 className='text-5xl text-white'>Impressed by our work?</h1>
                <p className='text-xl my-8 text-white'>Get an estimate for your project.
                    We’re reachable in few click
                </p>   
            </div> 
            <div className='w-[80%] grid md:grid-cols-3 gap-4 mx-auto mt-10 '>
                <div className=' text-center p-3 bg-[#C8DBD7] rounded-t-xl' >
                    <HiOutlineBuildingOffice2  className='text-[#3C5556] text-7xl mx-auto'/>
                    <h1 className='text-2xl mb-3'>Our Office</h1>
                    <p>The KariGhars, 1566, 2nd Floor, Service Rd, Agara Village, 1st Sector, HSR Layout, Bengaluru, Karnataka – 560102</p>
                </div>
                <div className=' text-center p-3  bg-[#C8DBD7] rounded-t-xl'>
                    <AiOutlineMail className='text-[#3C5556] text-7xl mx-auto '/>
                    <h1 className='text-2xl mb-3'>Our Email</h1>
                    <p>Email- ramesh.jangid***@gmail.com</p>
                    <p>Email- jangid.priya***@gmail.com</p>
                </div>
                <div className='text-center p-3  bg-[#C8DBD7] rounded-t-xl'>
                    <LiaPhoneSolid className='text-[#3C5556] text-7xl mx-auto'/>
                    <h1 className='text-2xl mb-3'>Our Phone lines</h1>
                    <p>Mobile- 8005686***</p>
                    <p>Mobile- 756898****</p>
                </div>
            </div>                           
        </div> 
        <div className='grid md:grid-cols-2 gap-2 mx-auto w-[80%] mt-14'>
            <div className='md:pt-14'>
                <h1 className='text-3xl font-semibold mb-3'>Why The Envy Designer?</h1> 
                <p>
                For the Envy team, every detail in design must have a purpose, must reflect your personality and must be beautiful. <span><br />For the Envy team, every detail in design must have a purpose, must reflect your personality and must be beautiful.</span>
                </p>
                <button className='btn bg-[#3C5556] mt-3 p-3 rounded-full text-white'>Shop Now</button>
            </div>
            <div>
                <img src= {AboutImg} alt=''/>
            </div>
        </div>
        {/* <div className='w-[100%] bg-[#C8DBD7] text-center mt-12 py-10'>
            <h1 className='text-4xl text-center'>Our Signature Projects</h1>
            <div className='flex justify-evenly items-center mt-5'>
            <LiaPhoneSolid className='text-[#3C5556] text-7xl mx-auto'/>
            <LiaPhoneSolid className='text-[#3C5556] text-7xl mx-auto'/>
            <LiaPhoneSolid className='text-[#3C5556] text-7xl mx-auto'/>
            <LiaPhoneSolid className='text-[#3C5556] text-7xl mx-auto'/>
            </div>
        </div>   */}
    </div>
  )
}

export default AboutMidSection