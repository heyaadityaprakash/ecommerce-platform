import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
function CartTotal() {

    const {currency,delivery_fee,getCartAmount}=useContext(ShopContext)
    return ( 
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'Final'} text2={'Checkout'}/>
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}</p>
                </div>
                <hr />

                <div className='flex justify-between'>
                    <p>Deivery fees</p>
                    <p>{currency}{delivery_fee}</p>
                </div>

                <div className='flex justify-between'>
                    <p>Total</p>
                    <p>{currency}{getCartAmount()===0? o : getCartAmount()+delivery_fee}</p>
                </div>


            </div>

        </div>
     );
}

export default CartTotal;