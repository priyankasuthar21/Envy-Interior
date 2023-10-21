import React, { useContext } from 'react'
import { EcomContext } from '../Context/ContextHolder'
    const Cart = () => {
    const {cart} = useContext(EcomContext)
    const cartProductItem = cart.map(
        (d, i) => {
         return   <CartItem {...d} key={i} index={i} />
        }
    )


    return (
 
         <>
         <div className=''>
            {cartProductItem}
         </div>
         
         </>

  )
}


const CartItem = ({productId, qty, index}) => {
    const {products, changeCartQty} = useContext(EcomContext)
    const cartProduct = products.filter(
        (d) => {
            return d.id === productId;
        }
    )


    return(
        <>
        <div className='w-[80%] p-2 container grid md:grid-cols-4 grid-cols-2 gap-4 mt-10 mx-auto   '>
            <div className='w-[100px]  mx-auto'>
                {cartProduct[0].thumbnail}
            </div>
            <div className='shadow text-center pt-5 font-bold'>
                <h2 className='mb-2'>{cartProduct[0].title}</h2>
                <p>₹{cartProduct[0].price}</p>
            </div>
            <div className='text-center shadow   flex justify-center items-center font-bold'>
                <button className='btn border p-3 bg-[#3C5556]  text-white text-3xl' onClick={() => changeCartQty(index, 0)}>-</button>
                {/* <BiPlus className='btn py-2 px-3 bg-[#3C5556] rounded-full text-white' /> */}
                <div className='text-3xl border p-3'>{qty}</div>  
                <button className='btn  border p-3 bg-[#3C5556]  text-white text-3xl' onClick={() => changeCartQty(index, 1)}>+</button>
            </div>
            <div className='text-center pt-5 shadow font-bold'>
                <h2 className='text-2xl mb-2'>Total</h2>
                <div> ₹{cartProduct[0].price * qty} </div>
            </div>
        </div>
        {/* <button className='btn py-3 px-4 bg-[#3C5556] text-white w-[30%] text-2xl'>Checkout</button> */}
        </>
    )
}

export default Cart