
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EcomContext } from '../Context/ContextHolder';
import {SiHomeadvisor} from 'react-icons/si';
import {AiFillHeart} from 'react-icons/ai'

const Navbar = () => {  
    const {cart} = useContext(EcomContext);
    const {wishList} = useContext(EcomContext)
    return(
        <div className='py-3 bg-[#3C5556] text-white  flex-none md:flex justify-between md:items-center px-5 '>
            <div className="text-bold md:flex italic justify-between items-center">
                Interior
                <SiHomeadvisor fill='white' className='text-4xl'/>
                Designs
            </div>          
            <ul className='md:flex   md:gap-4'> 
                {/* <AiOutlineMenu /> */}
                <Link to= {"/"}>Home</Link>
                <Link to= {"/about"}>About</Link>
                <Link to= {"/gallery"}>Gallery</Link>
                <Link to= {"/services"}>Services</Link>
                <Link to= {"/contact"}>Contact</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/cart"}>Cart ({cart.length})</Link>
                <Link to={"/wishlist"}>
                    <AiFillHeart className='text-xl inline-block'/> ({wishList.length})
                </Link>
            </ul>
        </div>
    )

}


export default Navbar;

