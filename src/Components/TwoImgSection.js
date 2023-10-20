import React from 'react'
import Sect51 from '../images/sec5(1).jpg'
import Sect52 from '../images/sec5(2).jpg'

const TwoImgSection = () => {
  return (
    <>
   
        <div className='grid md:grid-cols-2 mx-auto w-[80%] mt-10 gap-5'>
            <div >
            {/* // 2nd method to define  images from img src//   */}
                <img src= {Sect51} alt='' />       
            </div>
            <div>
                <img src= {Sect52} alt='' />
            </div>          
        </div>
  

    {/* <div className='shadow-sm'>
        <img src= {Image} alt='image'/>
    </div> */}
    </>
  )
}

export default TwoImgSection