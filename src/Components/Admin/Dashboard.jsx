import React from 'react'
// import { useNavigate, navigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminRightbar from '../AdminRightbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
// const navigate = useNavigate();
 return (
    <>
        <div className='w-[100%] mt-10 grid grid-cols-4 px-5 gap-10'>
            <AdminSidebar />
            <div>
                {Outlet}
            </div>
       
            {/* <AdminRightbar />   */}
        </div>
    </>
    )   
 }
 

export default Dashboard;