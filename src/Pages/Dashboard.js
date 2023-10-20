import React from 'react'
// import { useNavigate, navigate } from 'react-router-dom';
import DashboardSidebar from '../Components/DashboardSidebar';
import DashboardRightbar from '../Components/DashboardRightbar';

const Dashboard = () => {
// const navigate = useNavigate();
 return (
    <>
        <div className='w-[100%] mt-10 grid grid-cols-4 px-5 gap-10'>
            <DashboardSidebar />
            <DashboardRightbar />  
        </div>
    </>
    )   
 }
 

export default Dashboard;