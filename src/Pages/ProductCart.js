// import React from 'react'
// import Navbar from '../Components/Navbar'
// import CenterHeading from '../Components/CenterHeading'
// import { useState, useEffect } from 'react'
// const ProductCart = () => {
//   const[count, setCount] = useState (0);
//   const[price, setPrice] = useState(0)
//   // const[count, setCount] = useState ([""])
//   // const cartItem = (data) => {
//   //   return (
//   //     [
//   //       ...setCart,
//   //       data
//   //     ]
//   //   )
//   // }
//   const clickHandler = (type) => {
//       if(type == 1) {
//         setCount(count+1);
//         // setPrice(count*100)
//       }else{
//         setCount(count-1);
//         // setPrice(count*100)
//       }
//   }

//   useEffect(
//     function(){
//       setPrice(count*100)
//     },
//     [count]
//   )

//   return (
//     <>
//       <Navbar />
//       <div className='mb-14 mt-10'>
//         <CenterHeading centerheading= {"Cart Page"}/>
//         <div className='grid grid-cols-3 gap-6 mt-20 px-10 py-5'>
//           <div className='shadow-xl'>

//           </div>
//           <div className='shadow-xl flex justify-around text-center px-10 py-5'> 
//             <button className='bg-[#3C5556] text-3xl p-3 text-white' onClick={() => clickHandler(1)}>+</button>  
//             <h1 className='text-4xl'>{count} - {price}</h1>
//             <button className='bg-[#3C5556] text-3xl p-3 text-white' onClick={() => clickHandler(0)}>-</button>  
//           </div>
//           <div className='shadow-xl px-10 py-5'>

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ProductCart