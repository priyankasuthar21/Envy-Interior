import React from 'react'
const ImageComp = (props) => {
  return (
    <>
        <img src= {props.img} to = {props.to} alt={props.alt ? props.alt : process.env.SITENAME} width={"100%"} style={props.style}/> 
    </>
  )
}

export default ImageComp