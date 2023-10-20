import React from 'react'

const PriButton = (props) => {
  return (   
     
        <a className='rounded  bg-[#3C5556] text-white py-3 px-10 w-[30%] container mx-14' link = {props.link} >
            {props.name}
        </a>
   
    
   
  )
}

export default PriButton