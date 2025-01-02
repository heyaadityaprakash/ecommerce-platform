import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
function PlaceOrder() {

    const [method,setMethod]=useState('cod')
    const navigate=useNavigate()

    return ( 
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-3 sm:pt-10 min-h-[80%]'>
            <div className='flex flex-col gap-4 w-full sm:max-w-[400px]'>
                <div className='text-xl smLtext-3xl my-2'>
                    <Title text2={'Checkout'}/>
                </div>
                <div className='flex gap-3'>
                    <input type="text" placeholder='First name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
                    <input type="text" placeholder='Last name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
                </div>
                <input type="number" placeholder='Phone no' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />

                <input type="email" placeholder='email address' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
                <input type="text" placeholder='Street Name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
                <div className='flex gap-3'>
                    <input type="text" placeholder='City' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
                    <input type="number" placeholder='Pincode' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
                </div>
                <div className='flex gap-3'>
                    <input type="text" placeholder='State' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
                    <input type="text" placeholder='Country' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
                </div>
            </div>
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal/>
                </div>

                <div className='mt-10 '>
                    <Title text1={'payment'} text2={'methods'}/>
                    <div className='flex flex-col gap-2 lg:flex-row'>
                        <div onClick={()=>setMethod('stripe')} className='flex items-center gap-2 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-green-500':''}`}></p>
                            <img className='h-6 mx-4'  src={assets.stripe_logo} alt="" />
                        </div>

                        <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-2 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full${method==='razorpay'?'bg-green-500':''}`}></p>
                            <img className='h-6 mx-4' src={assets.razorpay_logo} alt="" />
                        </div>

                        <div onClick={()=>setMethod('cod')} className='flex items-center gap-2 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-green-500':''}`}></p>
                            <p className='text-gray-600 font-medium mx-4'>Cash on Delivery</p>
                        </div>
                        

                    </div>

                    <div className='w-full text-end mt-8'>
                        <button onClick={()=>navigate('/orders')} className='bg-black text-gray-200 px-10 py-2'>checkout</button>
                    </div>

                </div>
            </div>
           
        </div>
     );
}

export default PlaceOrder