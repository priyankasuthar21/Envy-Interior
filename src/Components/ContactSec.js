import React from 'react'
import ContactImg from './../images/contactsec.jpg'
import HeadingPara from './HeadingPara'
const ContactSec = () => {
  return (
    <div className='w-[100%]'>
        <div className='mx-auto relative'>
            <img src = {ContactImg} alt='' className='w-[100%]' />    
            <h1 className='absolute md:top-[30%] md:left-[40%] left-[15%] top-5 bg-[#c8dbd7c5] md:py-10 text-4xl text-center md:px-10 py-3 px-4'>Get In Touch With Us </h1>
        </div>
        <div className=' mt-10'>
            <h1 className='text-4xl text-center mx-auto border-b-2 w-[50%]'>Are You Ready To Love Your Space?</h1>
        </div>
        <div className='grid md:grid-cols-2 gap-6 mt-10 text-center w-[80%] mx-auto'>
            <div className='md:p-10 p-5'>
                <HeadingPara heading= {"Book A Free 15-Minute Discovery Call"}  para = {"Let’s hop on a discovery call to chat about your project and answer any questions you might have about working with MCI."}/>
            </div>
            <div className='md:p-10 p-5'>
                <h2 className='text-3xl md:text-left font-semibold mb-5 '>Send us a message</h2>
               
                <form className='text-left'>
                    <label className='text-l'>Name</label> <br />
                    <input type='text' className='shadow-lg mt-3 md:w-[80%] w-[100%] mb-4 h-[40px] border'></input><br />
                    <label className='text-l'>Email</label><br />
                    <input type='email' className='shadow-lg mt-3 md:w-[80%] w-[100%] mb-4 h-[40px] border'></input><br />
                    <label className='text-l'>Phone</label><br />
                    <input type='text' className='shadow-lg mt-3 md:w-[80%] w-[100%] mb-4 h-[40px] border'></input><br />
                    <label>Tell about yourself</label><br />
                    <textarea className='md:w-[80%] w-[100%] text-l h-[120px] mt-5 shadow-lg'></textarea><br />
                    <div className='md:mx-auto w-[300px]'>
                        <button className='btn py-2  rounded-full bg-[#3C5556] mt-7 text-white w-[200px]  '>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactSec