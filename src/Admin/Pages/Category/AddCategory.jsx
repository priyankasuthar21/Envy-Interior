import React, { useContext, useRef } from 'react'
import MainContext from '../../Context/ContextHolder';


const AddCategory = () => {
  const {notify} = useContext(MainContext)
  const slugBox = useRef();

  const getData = (event) =>{
    slugBox.current.value = event.target.value.toLowerCase().split(" ").join("-");
    notify("Hello")
  }

  
  return (

  <>
  <div className='w-[80%] mx-auto container mt-10'>

      <div className='shadow border '>
        
        <h2 className='p-2 text-3xl'> Add Category</h2>
        <hr />
        <form className='shadow p-6'>
          <div>
            <label>Category Name</label> <br />
            <input type='text'  placeholder='Category name' className='shadow border w-[100%] mt-2 p-2 rounded-md' onKeyUp={getData}/> <br />
          </div>
          <div className='mt-2'>
            <label>Category Slug</label> <br />
            <input type='text' placeholder='Category slug' className='shadow border w-[100%] mt-2 p-2 rounded-md' ref={slugBox}/> <br />
          </div>
          <div className='mt-4'>
            <button className='bg-[#3C5556] text-white px-3 py-2 w-[10%] rounded-full'>Save</button>
          </div>
        </form>
      </div>
      </div>
      </>
  )
}

export default AddCategory