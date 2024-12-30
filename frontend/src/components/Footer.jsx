import React from 'react';
import { assets } from '../assets/assets';
function Footer() {
    return ( 
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm my-5 mx-4'>
                <div>
                    <img src={assets.logo} alt="" className='w-20 mb-5' />
                    <p className='w-full md:w-2/3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed fuga ex exercitationem necessitatibus consequatur nulla amet voluptatum. Voluptatibus, porro odio, aspernatur possimus harum tempora asperiores ipsam nostrum, ea fugit illo.</p>

                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li> 

                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>Get in touch</p>
                    <ul className='flex flex-col gap-1'>
                        <li>+91 9987 321 126</li>
                        <li>contact@forever.com</li>
                        

                    </ul>
                </div>
            </div>
                <div>
                    <hr />
                    <p className='py-5 text-sm text-center'>Copyright 2024 Forever.com all rights reserved</p>
                </div>
        </div>
     )
}

export default Footer;