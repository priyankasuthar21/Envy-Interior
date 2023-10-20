import Navbar from '../Components/Navbar'
import imgHeroSection from "./../images/banner1.jpg"
import FeatureCategory from '../Components/FeatureCategory'
import AboutWebpage from '../Components/AboutHomeSec'
import AboutImg from './../images/about.jpg'
import ProductServices from '../Components/ProductServices'
import ThreeImgSection from '../Components/ThreeImgSection'
import TwoImgSection from '../Components/TwoImgSection'
import BestSeller from '../Components/BestSeller'
import Banner2 from './../images/bb.webp'
import ShippingPolicy from '../Components/ShippingPolicy'
import Footer from '../Components/Footer'
import Image from '../Components/ImageComp'
import HeadingPara from '../Components/HeadingPara'
import Banner from '../Components/Banner'

const Home = () => {

return (
  <>
    <div className='container max-w-[100%]'>

      <Navbar />  

      <Banner img = {imgHeroSection} />

      <div className='text-center my-10'>
          <HeadingPara heading = {"Welcome To Home Interior"} para = {"We all know what our ideal home looks like, and often it's making this vision a reality that's difficult to achieve."} className = "text-center"/>
      </div>
      
      <FeatureCategory />

      <AboutWebpage img= {AboutImg} heading = {"Welcome To Home Interior"} para = {"The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/> 
        
      <ThreeImgSection />
        
      <TwoImgSection />
       
      <ProductServices />

      <BestSeller />
      <div className='mt-12'>
        <Image img = {Banner2} title = {"hellow"} ></Image>
        {/* <img  src= {Banner2} alt='' /> (Use this type also) */}
      </div>  
      <ShippingPolicy />
         
      <Footer />

    </div>
  </>
  )
}

export default Home