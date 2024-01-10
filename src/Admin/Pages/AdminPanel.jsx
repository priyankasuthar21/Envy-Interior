import React from 'react'
import AdminSideBar from '../Components/AdminSidebar'
import AdminRightBar from '../Components/AdminRightbar'

const AdminPanel = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
       <AdminSideBar />    
        <AdminRightBar /> 
      
    </div>
  )
}

export default AdminPanel