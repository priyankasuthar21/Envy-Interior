import React from 'react'
// import { useNavigate, navigate } from 'react-router-dom';
import AdminSideBar from './AdminSidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';


const Dashboard = () => {
  return (

    <div className='w-[100%]  grid grid-cols-4  gap-4'>
      <AdminSideBar />
      <div className=' col-span-3'>
        <div className=' p-2 shadow'>
            <ul className=' flex gap-4 items-center '>
              <li>Home</li>
              <li>About</li>
              <li>Gallery</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
        </div>
        <Outlet />
      </div>
    </div>

  )
}



export default Dashboard;

