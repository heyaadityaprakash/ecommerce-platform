import React from 'react';
import { assets } from '../assets/assets';

function Hero() {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-500 my-5 mx-4'>
            {/* Left side */}
            <div className='w-full sm:w-6/12 flex flex-col items-center sm:items-start justify-center py-10 sm:py-0'>
                <div className='text-[#414141] flex flex-col gap-6'>
                    <p className='font-medium text-sm md:text-base text-right'>BEST SELLERS</p>
                    <h1 className='prata-regular  text-xl sm:text-3xl md:text-4xl font-bold'>Latest Arrivals</h1>
                    <p className='font-medium text-sm md:text-base'>SHOP NOW</p>
                </div>
            </div>

            {/* Right side (Image) */}
            <div className='w-full sm:w-6/12'>
                <img src={assets.hero_img} className='w-full h-auto' alt="Hero" />
            </div>
        </div>
    );
}

export default Hero;
