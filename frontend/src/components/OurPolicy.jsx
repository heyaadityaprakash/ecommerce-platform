import React from 'react';
import { assets } from '../assets/assets';
function OurPolicy() {
    return ( 
        <div className='flex flex-col sm:flex-row justify-around items-center gap-12 sm:gap-2 text-center py-20 text-xs md:text-base text-gray-600 '>
            <div>
                <img src={assets.exchange_icon} className='w-10 m-auto mb-4' alt="" />
                <p className='font-semibold'>Easy Exchanges</p>
                <p>We offer hassle-free Exchanges</p>
            </div>

            <div>
                <img src={assets.quality_icon} className='w-10 m-auto mb-4' alt="" />
                <p className='font-semibold'>Genuine Quality</p>
                <p>All products are genuinely sourced</p>
            </div>

            <div>
                <img src={assets.support_img} className='w-10 m-auto mb-4' alt="" />
                <p className='font-semibold'>24/7 Customer Support</p>
                <p>We are always there for you</p>
            </div>

            
            
        </div>
     );
}

export default OurPolicy;