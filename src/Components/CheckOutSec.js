import React from 'react'

const CheckOutSec = () => {
  return (
    <>
    
    <div className='w-[80%] bg-[#C8DBD7] mx-auto grid grid-cols-2 gap-6 my-12'>
        <div className='shadow'>  
            <form className='w-[100%] p-10'>
                <div className='mb-8'>
                    <h1 className='text-2xl font-semibold mb-5'>Contact Information</h1 >
                    <label className='font-semibold'>Email Address</label> <br />
                    <input type='text' className='shadow-lg mt-3 w-[100%] mb-4 h-[40px] border'></input><br />
                 
                </div>
                <div>
                    <h1 className='text-2xl font-semibold mb-5'>Shipping Information</h1 >
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='font-semibold'>First name</label> <br />
                            <input type='text' className='shadow-lg mt-3 w-[100%] mb-5 h-[40px] border'></input> 
                        </div>
                        <div>
                            <label className='font-semibold'>Last name</label> <br />
                            <input type='text' className='shadow-lg mt-3 w-[100%] mb-5 h-[40px] border'></input>
                        </div>
                    </div>
                    <div>
                        <label className='font-semibold'>Address</label> <br />
                        <input type='text' className='shadow-lg mt-2 w-[100%] mb-5 h-[40px] border'></input>
                        <label className='font-semibold'>Apartment</label> <br />
                        <input type='text' className='shadow-lg mt-2 w-[100%] mb-5 h-[40px] border'></input>
                        <label className='font-semibold'>Company name</label> <br />
                        <input type='text' className='shadow-lg mt-2 w-[100%] mb-5 h-[40px] border'></input>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='font-semibold'>City</label> <br />
                            <input type='text' className='shadow-lg mt-2 w-[100%] mb-4 h-[40px] border'></input> 
                        </div>
                        <div>
                            <label className='font-semibold'>Country</label> <br />
                            <select name="country" id="country" className='w-[100%] mt-2 h-[40px]'>
                                <option value="US">US</option>
                                <option value="India">India</option>
                                <option value="Pak">Pak</option>
                                <option value="London">London</option>
                            </select>
                        </div>
                        <div>
                            <label className='font-semibold'>State / Province</label> <br />
                            <input type='text' className='shadow-lg mt-3 w-[100%] mb-5 h-[40px] border'></input> 
                        </div>
                        <div>
                            <label className='font-semibold'>Postal code</label> <br />
                            <input type='text' className='shadow-lg mt-2 w-[100%] mb-5 h-[40px] border'></input>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <label className='text-2xl font-semibold'>Payment</label> <br />
                        <div className='flex justify-evenly items-center gap-4' >                         
                            <input type="radio" className='text-xl' />
                            <label for="payment1"> Credit Card</label><br />
                            <input type="radio"  className='text-xl'/>
                            <label for="payment2"> ETransfer</label><br />
                            <input type="radio" className='text-xl'/>
                            <label for="payment3"> Paypal</label><br />
                        </div>
                        <div className='mt-5'>
                            <label className='font-semibold'>Card number</label> <br />
                            <input type='text' className='shadow-lg mt-3 w-[100%] mb-5 h-[40px] border'></input> 
                        </div>
                        <div>
                            <label className='font-semibold'>Name on card</label> <br />
                            <input type='text' className='shadow-lg mt-3 w-[100%] mb-5 h-[40px] border'></input> 
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='col-span-2'>
                                <label className='font-semibold '>Expiration date (MM/YY)</label> <br />
                                <input type='date' className='shadow-lg mt-3 w-[100%] mb-5 h-[40px] border'></input> 
                            </div>
                            <div>
                                <label className='font-semibold'>CVC</label> <br />
                                <input type='text' className='shadow-lg mt-3 w-[100%] mb-5 h-[40px] border'></input>
                            </div>
                        </div>
                        <input type="submit" value="Submit" className='bg-[#3C5556] text-white py-3 px-4 mt-7 w-[100px] '></input>
                    </div>
                </div>
            </form>
        </div>
        <div className='shadow'>
        dfhbzdfhdfh
        </div>
    </div>
   
    </>
  )
}

export default CheckOutSec