import React, { useContext } from 'react'
import { EcomContext } from '../Context/ContextHolder' 
import {BsFillHeartFill} from 'react-icons/bs'

const Product = () => {
    const {products} = useContext(EcomContext)
    const productData = products.map(
        (d, i) =>{
            return(
                <div className=' hover:rounded-xl transition duration-700 pointer  hover:transition hover:duration-700 hover:shadow-3xl hover:bg-[#C8DBD7]'>
                    <Card img = {d.thumbnail} title={d.title} price={d.price} desc = {d.desc} key={d.i} id={d.id }/> 
                    {/* <Card {...products} key={d.id}/>    (also define all products combine rather than passing signle props)*/} 
                </div>
            )
        }
    )

  return (
    <>
        <h1 className='text-3xl font-semibold text-center'>Best Sellers</h1>
        <div className='w-[80%] mt-10 mx-auto grid  gap-6  md:grid-cols-4 sm:grid-cols-2 container'>   
            {productData}
        </div>
    </>
  )
}

const Card = ({img, title, price, id, desc}) => {

    const {addToCart} = useContext(EcomContext);
    const {addToWishList} = useContext(EcomContext)
    return(
        <div className=' p-5 shadow-xl rounded-xl'>
            {img}
            <div className='p-2 font-bold'>{title}</div>
            <div className='p-1'>{desc}</div>
            <div className='p-2 font-bold'>Price - ₹{price}</div>
            <div className='flex justify-between gap-3  pt-3 px-2'>
                <button className='btn p-2 w-[150px] font-bold rounded-full bg-[#3C5556] text-white' onClick={() => addToCart(id)}>Add To Cart</button>
                <BsFillHeartFill className = {'font-bold fill-[#3C5556]  text-3xl'} onClick={() => addToWishList(id)} />
                {/* <button className='btn p-2 w-[80px] font-bold rounded-full bg-[#3C5556] text-white' onClick={() => addToWishList(id)}>Like</button> */}
            </div>
        </div>
    )
}

export default Product







// import React from 'react'
// // import CenterHeading from './CenterHeading'
// import { home_products } from '../data/products';
// // import { Link } from 'react-router-dom';
// const Product = () => {

//   const bestSeller = home_products.map(
//     (d, i) => {
//       return (
//         <>
//       <div className='mt-5 grid lg:grid-cols-4 sm:grid-cols-2  gap-6 container w-[80%] mx-auto'>
//         <Card img= {d.img} title= {d.title} key = {d.id} price = {d.price} />
//       </div>
       
        
//     return (
//   <div>
//     {bestSeller}
//   </div>
// )
//                 </>
//       )
//     }
//   )





// const Card = ({img, title, price}) => {
//   return (
//     <div className='shadow'>
//       {img}
//       <div className='font-bold'>{title}</div>
//       <div className='font-bold'>{price}</div>
//       <div className='flex justify-around'>
//         <button>Add To Cart</button>
//         <button>Like</button>
//       </div>
//     </div>
//   )
// }
// }

// export default Product