import { AiFillHome } from "react-icons/ai"
import {IoIosBed} from 'react-icons/io'
import {GiWoodenSign, GiTempleDoor} from 'react-icons/gi'
import {FaGoogleWallet} from 'react-icons/fa'
import {ImSpinner9} from 'react-icons/im'
import {DiModernizr} from 'react-icons/di'


//Shipping 
import {LiaShippingFastSolid} from 'react-icons/lia' 
import {AiOutlineCustomerService} from 'react-icons/ai'
import {MdOutlinePolicy} from 'react-icons/md'
import {MdMiscellaneousServices} from 'react-icons/md'


// featureCategory section's
import sec21 from './../images/sec2(1).jpg'
import sec22 from './../images/sec2(2).jpg'
import sec23 from './../images/sec2(3).jpg'
import sec24 from './../images/sec2(4).jpg'
import sec25 from './../images/sec2(5).jpg'
import sec26 from './../images/sec2(6).jpg'




// for featureCategory section's images and link
export const featureCategory = [
    {   id: 1,
        // img: <Image img = {sec21} className = 'rounded-full'/>,
        img: <img src= {sec21} alt=""  style={
            {borderRadius: '100px'}
            }/>,
        title: "Lighting"      
    },
    {   id: 2,
        img: <img src= {sec22} alt=""  style={
            {borderRadius: '100px'}
            }/>,
        title: "Soffas"
      
    },
    {   id: 3,
        img: <img src= {sec23} alt=""  style={
            {borderRadius: '100px'}
            }/>,
        title: "Kitchen Decor"
      
    },
    {   id: 4,
        img: <img src= {sec24} alt=""  style={
            {borderRadius: '100px'}
            }/>,
        title: "Tables"
    
    },
    {   id: 5,
        img: <img src= {sec25} alt=""  style={
            {borderRadius: '100px'}
            }/>,
        title: "Drawers"
      
    },
    {  
         id: 6,
         img: <img src= {sec26} alt=""  style={
            {borderRadius: '100px'}
            }/>,
        title: "Chairs"
    }
]



// ProductServices section's icons and details 
const pLink = [
    {   id: 1,
        img: <AiFillHome  className="w-[100%] mx-auto text-4xl text-[#3C5556]"/>,
        title: <h1 className="text-xl">Home Decor</h1>,
        describe: "Get your place the best makeover possible."
    },
    {   id: 2,
        img: <ImSpinner9 className="w-[100%] mx-auto text-4xl text-[#3C5556]"/>,
        title:<h1 className="text-xl">Interior Craft</h1>,
        describe: "Creating beautiful interiors, one room at a time."
    },
    {   id: 3,
        img: <DiModernizr className="w-[100%] mx-auto text-4xl text-[#3C5556]"/>,
        title: <h1 className="text-xl">Modern Designs</h1>,
        describe: "A design gives you, your dream house."
    },
    {   id: 4,
        img: <GiTempleDoor className="w-[100%] mx-auto text-4xl text-[#3C5556]"/>,
        title: <h1 className="text-xl">Wooden Craft</h1>,
        describe: "We believe in living and making good."
    },
    {   id: 5,
        img: <FaGoogleWallet  className="w-[100%] mx-auto text-4xl text-[#3C5556]"/>,
        title: <h1 className="text-xl">Wall Decor</h1>,
        describe: "It’s an art that you need to learn and draft. "
    },
    {   id: 6,
        img: <IoIosBed className="w-[100%] mx-auto text-4xl text-[#3C5556]"/>,
        title:<h1 className="text-xl">Custom Designs</h1>,
        describe: "Custom design makes the place spacious. "
    },
    {   id: 7,
        img: <GiWoodenSign className="w-[100%] mx-auto text-4xl text-[#3C5556]"/>,
        title: <h1 className="text-xl">Exterior Craft</h1>,
        describe: "We have all the designs that you want."
    },
    {   id: 8,
        img: <GiTempleDoor className="w-[100%] mx-auto text-4xl text-[#3C5556]"/>,
        title: <h1 className="text-xl">Wooden Craft</h1>,
        describe: "Your choice is our first and foremost priority "
    },
]



//shipping policy

export const shipping = [
    {
        icon: <LiaShippingFastSolid fill='#3C5556' className='text-4xl'/>
    },
    {
        icon:  <MdOutlinePolicy fill='#3C5556' className='text-4xl'/>
    },
    {
        icon: <AiOutlineCustomerService fill='#3C5556' className='text-4xl'/>
    },
    {
        icon: <MdMiscellaneousServices fill='#3C5556' className='text-4xl'/>
    }

]
export default pLink
