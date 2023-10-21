import aboutimg from './../images/about.jpg'
import HeadingPara from './HeadingPara'
import { useContext } from 'react'
import { EcomContext } from '../Context/ContextHolder'
import { Link } from 'react-router-dom'
const AboutWebpage = () => {
const {addToCart} = useContext(EcomContext)
  return (
  
    <div className='grid md:grid-cols-2  gap-2   mx-auto mt-12'>
      <img src={aboutimg} alt='' className='w-[100%] h-[100%]'/>
      <div className='bg-[#C8DBD7]  pt-7 pb-6 '> 
        <div className='mb-4'>      
          <HeadingPara heading = {"Innovative Solutions To Improve Your Home"} para = {"Home decor is clearing and creating living spaces that are visually appealing and more attractive to the human eye. Designing and decorating our homes is something we can easily envision. We all know what our ideal home looks like, and often it's making this vision a reality that's difficult to achieve. There are many types of interior design, with the list ever-evolving. Some of them are fads and others are timeless classics that stand the test of time. Each style is comprised of distinctive furniture, décor, lighting, and accessories that give it its signature look."}/> 
        </div> 
        <div className='md:mx-auto mt-10'>    
          <Link to = '/cart' className=' mx-20  btn px-5 py-3  font-bold rounded-full bg-[#3C5556] text-white' onClick={() => addToCart()}>Add To Cart</Link>                 
        </div> 
      </div>
    </div>
 
  )
}

export default AboutWebpage