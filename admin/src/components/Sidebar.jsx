import React from 'react';
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/assets';
function Sidebar() {
    return ( 
        <div className='w-[20%] min-h-screen border-r-2 '>
            <div className='flex flex-col gap-4 pt-10 '>
                <NavLink className='flex items-center gap-3 p-2 border border-gray-400 border-r-0' to={'/add'}>
                <img  className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className=' hidden md:block'>add items</p>
                </NavLink>

                <NavLink className='flex items-center gap-3 p-2 border border-gray-400 border-r-0' to={'/list'}>
                <img  className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className=' hidden md:block'>List items</p>
                </NavLink>

                <NavLink className='flex items-center gap-3 p-2 border border-gray-400 border-r-0' to={'/orders '}>
                <img  className='w-5 h-5' src={assets.parcel_icon} alt="" />
                <p className=' hidden md:block'>orders</p>
                </NavLink>
                
                

            </div>
        </div>
     );
}

export default Sidebar;