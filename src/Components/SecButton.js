import React from 'react'

const SecButton = (props) => {
  return (   
     
        <a className='rounded bg-[#C8DBD7]  text-[#3C5556] py-3 px-10 w-[30%] container mx-14' link = {props.link} >
            {props.name}
        </a>
   
    
   
  )
}

export default SecButton