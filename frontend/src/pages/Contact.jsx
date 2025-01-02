import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter';
function Contact() {
    return ( 
        <div>
           <div className='text-center text-2xl border-t pt-10'>
            <Title text1={'Contact'} text2={'Us'}/>

           </div>

           <div className='my-10 flex flex-col justify-center md:flex-row gap-10 '>
            <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
            <div className='flex flex-col justify-center items-start gap-4'>
                <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                <p>2220 Hart Ridge Road <br />Saginaw Michigan 48607</p>
                <p className='text-gray-500'>Tel: 989-232-8444</p>
                <p className='text-gray-500'>Email: contact@forever.in </p>
                <p className='text-xl font-semibold'>Careers at Forever</p>
                <p className='text-gray-500'>Job openings</p>
                <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white'> explore roles</button>


            </div>

           </div>
                <NewsLetter/>
        </div>
     );
}

export default Contact;