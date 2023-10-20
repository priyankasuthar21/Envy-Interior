
// import React, { useState } from "react";
// import Navbar from "../Components/Navbar";
// import { imageData } from "../data/image";
// const Gallery = () => {

//     const [imgIndex, setImgIndex] = useState(null)
//     const boxes = imageData.map(
//         (d, index) =>{
//             return (
//                 <div className="shadow" key={index} onClick={() => setImgIndex(index)}>
//                     {d.img}
//                 </div>
//             )
//         }
//     )



//  return(
//     <>
//     <Navbar />
//     <div className="max-w-[1000px] mt-[20px] grid grid-cols-4 mx-auto gap-4">
//         {boxes}
//     </div>
//     <Prev imgIndex = {imgIndex} handler ={setImgIndex}/>
//     </>
//  )
// }


//   export const Prev = ({imgIndex, handler}) =>  {
//     const imgData = imageData.filter(
//         (d, i) =>{
//             return imgIndex == i;
//         }
//     )


//     return (
//         <div className={`${imgIndex !== null ? 'scale-1' : 'scale-0'} duration-[0.7s] flex flex-col justify-center items-center w-[100%] h-[100%] fixed bg-[rgba(0,0,0,0.7)] top-0`}>
//            <button onClick={() => handler(null)} className=" bg-white  mt-3 p-2 font-bold absolute top-12 right-8 text-2xl">×</button>
//             {/* <Image img= {`image/${imgData[0]}`} /> */}
//             <div>
//                 {
//                     imgIndex !== 0 ? <button className="bg-white p-3 border m-1" onClick={() => handler(imgIndex - 1)}> Prev </button> : ""
//                 }
//                {
//                 imgIndex !== imgData.length - 1 ? <button className="bg-white p-3 border m-1" onClick={() => handler(imgIndex + 1)}> Next </button> : ""
//                }
               
//             </div>
//         </div>
//     )
// }

// export default Gallery;