import React from 'react'

const HeadingPara = (props) => {
  return (
    <div className=' w-[80%] container mx-auto'>
        <h1 className='text-3xl font-semibold mb-2'>{props.heading}</h1>
        <p >{props.para}</p>
    </div>
  )
}

export default HeadingPara