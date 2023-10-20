import React from 'react'
import Image from './ImageComp'
const Banner = (props) => {
  return (
    <div className='backgroundImage relative'>   
      <Image img = {props.img}>
        <h1 className='absolute'>uyfykuyfiuufyu</h1>
        </Image>    
    </div>
  )
}

export default Banner