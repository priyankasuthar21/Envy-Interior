import React from 'react'
import { Link } from 'react-router-dom';
// import m1 from '../../images/IMG_3210.jpg';
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {MdOutlineInventory2} from 'react-icons/md'
import {BiCategoryAlt} from 'react-icons/bi'
import {TbReportSearch} from 'react-icons/tb'
import {AiFillSetting} from 'react-icons/ai'
import {AiOutlineCustomerService} from 'react-icons/ai'
const DashboardSidebar = () => {
  return (
    <>
    
    <div className='col-span-1 p-2 flex-start shadow px-5 pb-10 bg-[#C8DBD7]'>
        <div className='grid grid-cols-2 gap-10'>     
                <h1 className='mt-3 text-xl font-bold'>Priyanka Jangid</h1>
                {/* <img src= {m1} alt='image' className=' rounded-full  h-[80%]'/> */}
        </div>
        <div className='w-[100%]'>
                 <div className='mt-8 flex justify-start'>
                    <MdOutlineDashboardCustomize fill = "#3C5556" className="text-3xl mr-5"/>
                    <Link to ='/dashboard' className='text-xl font-semibold'>Dashboard</Link> <br/>
                </div> 
                <div className='mt-8 flex justify-start'>
                    <MdOutlineProductionQuantityLimits fill = "#3C5556" className="text-3xl mr-5"/>
                    <Link to ='/' className='text-xl font-semibold'>Products</Link> <br/>
                </div>
                <div className='mt-8 flex justify-start'>
                    <BiCategoryAlt fill = "#3C5556" className="text-3xl mr-5"/>
                    <Link to="/about" className='text-xl font-semibold'>Category</Link> <br/>
                </div>
                <div className='mt-8 flex justify-start'>
                    <AiOutlineCustomerService fill = "#3C5556" className="text-3xl mr-5"/> 
                    
                    <Link to="/gallery" className='text-xl font-semibold '>Customers</Link> <br/>
                </div>
                <div className='mt-8 flex justify-start'>
                 <MdOutlineInventory2 fill = "#3C5556" className="text-3xl mr-5"/> 
                    <Link to="/services" className='text-xl font-semibold'>Inventory</Link> <br/>
                </div>
                <div className='mt-8 flex justify-start'>
                    <TbReportSearch fill = "#3C5556" className="text-3xl mr-5"/>
                    <Link to="/contact" className='text-xl font-semibold'>Reports</Link>
                </div>
                <div className='mt-8 flex justify-start'>
                    <AiFillSetting fill = "#3C5556" className="text-3xl mr-5"/>
                    <Link to="/contact" className='text-xl font-semibold'>Setting</Link>
                </div>
                <div className='mt-8 flex justify-start'>
                    <AiFillSetting fill = "#3C5556" className="text-3xl mr-5"/>
                    <Link to="/contact" className='text-xl font-semibold'>Setting</Link>
                </div>
                <div className='mt-8 flex justify-start'>
                    <AiFillSetting fill = "#3C5556" className="text-3xl mr-5"/>
                    <Link to="/" className='text-xl font-semibold'>Logout</Link>
                </div>
                
        </div>
          
            </div>
        
         </>   
            
    )
    }

export default DashboardSidebar