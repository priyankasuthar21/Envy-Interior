import Navbar from '../Components/Navbar'
import FeatureCategory from '../Components/FeatureCategory'
import AboutWebpage from '../Components/AboutHomeSec'
import AboutImg from './../images/about.jpg'
import ProductServices from '../Components/ProductServices'
import ThreeImgSection from '../Components/ThreeImgSection'
import TwoImgSection from '../Components/TwoImgSection'
import BestSeller from '../Components/BestSeller'
import ShippingPolicy from '../Components/ShippingPolicy'
import Footer from '../Components/Footer'
import HeadingPara from '../Components/HeadingPara'
import Banner from '../Components/Banner'
import Banner2 from '../Components/Banner2'

const Home = () => {

return (
  <>
    <div className='container max-w-[100%]'>

      <Navbar />  

      <Banner/>

      <div className='text-center my-10'>
          <HeadingPara heading = {"Welcome To Home Interior"} para = {"We all know what our ideal home looks like, and often it's making this vision a reality that's difficult to achieve."} className = "text-center"/>
      </div>
      
      <FeatureCategory />

      <AboutWebpage img= {AboutImg} heading = {"Welcome To Home Interior"} para = {"The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/> 
        
      <ThreeImgSection />
        
      <TwoImgSection />
       
      <ProductServices />

      <BestSeller />
      <Banner2 />
      <ShippingPolicy />
         
      <Footer />

    </div>
  </>
  )
}

export default Home