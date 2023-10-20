import React, { createContext, useState } from 'react'
import { home_products } from '../data/products';
const EcomContext = createContext();

const ContextHolder = (props) => {
    const[products, setProducts] = useState(home_products)
    const[cart, setCart] = useState([]);
    const[wishList, setWishList] = useState([])


    const addToCart = (productId) => {
        const oldCart = cart;
        let flag = false;
        oldCart.forEach(element=>{
            if(element.productId === productId){
                element.qty = element.qty + 1;
                flag = true;
            }
        });
        if(flag === false){
            setCart(
                [
                    ...cart,
                   {
                    productId,
                    qty: 1
                   }

                ]
            )
        }else{
            setCart(oldCart)
        }     
    }

    const changeCartQty = (cartIndex, flag) => {
        const altCart = cart;
        altCart[cartIndex].qty = flag === 1 ? altCart[cartIndex].qty + 1 : altCart[cartIndex].qty - 1;
        setCart(altCart)
    }





    const addToWishList = (productId) => {
        const oldWishList = wishList;
        let flag = false;
        oldWishList.forEach(element=>{
            if(element.productId === productId){
                element.qty = element.qty + 1;
                flag = true;
            }
        });
        if(flag === false){
            setWishList(
                [
                    ...wishList,
                   
                   {
                    productId,
                    qty: 1
                   }

                ]
            )
        }else{
            setWishList(oldWishList)
        }     
    }
    
    const changeWishListQty = (wishIndex, flag) => {
        const altList = wishList;
        // altList = altList[wishIndex]
        altList[wishIndex].qty = flag === 1 ? altList[wishIndex].qty + 1 : altList[wishIndex].qty - 1;
        setWishList(altList);
    }



  return (
    <div>
        <EcomContext.Provider value={
           { 
            products,
            cart,
            wishList, 
            setProducts,
            addToCart,
            addToWishList,
            changeCartQty,  
            changeWishListQty          
            
        }
        }>
            {props.children}
        </EcomContext.Provider>        
    </div>
  )
}
export default ContextHolder
export {EcomContext}