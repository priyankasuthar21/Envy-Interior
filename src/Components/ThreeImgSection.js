import React from 'react'
import sec41 from '../images/sec4(1).jpg'
import sec42 from '../images/sec4(2).jpg' 
import sec43 from '../images/sec4(3).jpg'
import Image from './ImageComp'
export const threeImg = [
    {   id:1,
        img: <Image img = {sec41} width={"100%"} />,
        title: "Tables",
        desc: "Interior designing is the art and science which enhances your mind  "
    },
    {   id: 2,
        img: <Image img = {sec42} width={"100%"}/>,
        title: "Chairs",
        desc: "Interior designing is the art and science which enhances your mind  "
    },
    {   id: 3,
        img: <Image img = {sec43} width={"100%"}/>,
        title: "Interiors",
        desc: "Interior designing is the art and science which enhances your mind "
    }
]


const ThreeImgSection = () => {
    const threeItems = threeImg.map(
        (d) => {
            return <Card img= {d.img} title={d.title} desc = {d.desc} key = {d.id}/>
        }
    )

  return (
    <div className='grid md:grid-cols-3 mx-auto gap-6 w-[80%] mt-10 overflow-hidden container'>
        {threeItems}
    </div>
  )
}

export const Card = ({img, title, desc}) =>{
    return(
    <div className=' relative shadow-xl rounded group w-[100%] lg:h-[300px] overflow-hidden '>
        {img}
        <div className='duration-[500ms] group-hover:bottom-0  h-[50%] bg-[#C8DBD7]/70 rounded absolute bottom-[-50%] p-5 overflow-hidden  '>
          <h1 className='text-xl font-semibold'>{title} </h1>  
          <p >{desc}</p>
           <button className='bg-[#3C5556] my-2 px-3 py-2 rounded-full text-white '>Shop Now</button>
        </div>
    </div>
    )
}

export default ThreeImgSection