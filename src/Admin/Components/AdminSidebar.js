import React from 'react'
import { Link } from 'react-router-dom';
// import m1 from '../../images/IMG_3210.jpg';
import { MdOutlineDashboardCustomize } from 'react-icons/md'
// import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
// import {MdOutlineInventory2} from 'react-icons/md'
// import {BiCategoryAlt} from 'react-icons/bi'
// import {TbReportSearch} from 'react-icons/tb'
// import {AiFillSetting} from 'react-icons/ai'
// import {AiOutlineCustomerService} from 'react-icons/ai'
import { useState } from 'react';
const AdminSideBar = () => {

    const menu = [

        {
            name: "Dashboard",
            multi: false
        },
        {
            name: "Category",
            multi: true,
            items: [

                {
                    route: "Add",
                    path: "/dashboard/category/add"
                },
                {
                    route: "View",
                    path: "/dashboard/category"
                }
            ]
        },
        {
            name: "Product",
            multi: true,
            items: [
                {
                    route: "Add",
                    path: "/dashboard/products/add"
                },
                {
                    route: "View",
                    path: "/dashboard/products"
                }
            ]
        },
      
    ]



    return (
        <>

            <div className='flex-start shadow px-5  bg-[#C8DBD7] h-[100vh]'>
                <div>
                    <h1 className='mt-3 text-xl font-bold'>Priyanka Jangid</h1>
                    {/* <img src= {m1} alt='image' className=' rounded-full  h-[80%]'/> */}
                </div>
                <div>
                    <div className='mt-8 flex gap-2'>
                        <MdOutlineDashboardCustomize fill="#3C5556" className="text-2xl" />
                        <Link to='/admin' className='text-l font-semibold '>Dashboard</Link> <br />
                    </div>
                    <ul className='px-10 font-semibold'>
                        {
                            menu.map(
                                (menu) => {
                                    return <MenuList options={menu} />
                                }
                            )
                        }

                    </ul>
                    {/* 
                <div className='mt-8 flex justify-start'>
                    <AiFillSetting fill = "#3C5556" className="text-3xl mr-5"/>
                    <Link to="/" className='text-xl font-semibold'>Logout</Link>
                </div> */}

                </div>

            </div>

        </>

    )
}

const MenuList = ({ options }) => {
    const [show, setShow] = useState(false)
    return <li className='mt-2 cursor-pointer text-l font-semibold' onClick={() => { setShow(!show) }}>
        {
            options.multi === false ?
                <Link to={options.path}> {options.path} </Link> :
                <span> {options.name} </span>
        }

        {
            options.multi ?
                <ul className={` ${show ? "block" : "hidden"} list-none bg-[#3C5556] text-white p-2 rounded-md mb-3 mt-1`} >
                    {
                        options.items.map(
                            (i) => {
                                return <li>
                                    <Link to={i.path} key={i.key}>{i.route} </Link>
                                </li>
                            }
                        )
                    }

                </ul>
                :
                ""
        }
    </li>
}

export default AdminSideBar