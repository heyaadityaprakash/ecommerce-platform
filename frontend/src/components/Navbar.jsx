import React, { useContext, useState } from 'react';
import {assets} from '../assets/assets.js'
import {NavLink,Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx';
function Navbar() {

    const[visible,setVisible]=useState(false)
    const {setShowSearch,getCartCount}=useContext(ShopContext)
    return (  
        <div className='flex item-center justify-between py-5 px-4 font-medium'>
            <Link to={'/'}>
            <img src={assets.logo} alt="" className='w-36' />
            </Link>
        
           <ul className='hidden sm:flex gap-5 text-gray-600'>
            <NavLink to={'/'}>
                <p>Home</p>
                <hr className='w-2/ border-none h-[1.5px] bg-gray-700 '/>
            </NavLink>
            <NavLink to={'/collections'}>
                <p>Collections</p>
                <hr className='w-2/ border-none h-[1.5px] bg-gray-700 '/>
            </NavLink>
            <NavLink to={'/about'}>
                <p>About</p>
                <hr className='w-2/ border-none h-[1.5px] bg-gray-700 '/>
            </NavLink>
            <NavLink to={'/contact'}>
                <p>Contact</p>
                <hr className='w-2/ border-none h-[1.5px] bg-gray-700 '/>
            </NavLink>

           </ul>


        <div className='flex item-center gap-4'>
            <img src={assets.search_icon} className=' cursor-pointer h-7 ' onClick={()=>setShowSearch(true)} alt="" />

            <div className='group relative'>
                <Link to={'/login'}><img src={assets.profile_icon} className='cursor-pointer w-6' alt="" /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-40 p-2 items-center  text-gray-500 bg-slate-200 rounded'>
                        <p className='hover:text-black cursor-pointer'>My Profile</p>
                        <p className='hover:text-black cursor-pointer'>Orders</p>
                        <p className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>

            <Link to='/cart' className='relative'> 
                <img src={assets.cart_icon} className='w-6 min-w-6' alt="" />
                <p className='absolute right-[0px] bottom-[10px] px-1 text-center leading-4 bg-black text-white text-[8px] rounded-full  aspect-square'>{getCartCount()}</p>
            </Link>


            <img src={assets.menu_icon} onClick={()=>setVisible(true)} className='w-3 cursor-pointer sm:hidden' alt="" />
         </div>

         {/* sidebar menu sm */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full':'w-0'}`}>
            <div className='flex flex-col text-gray-500 '>
                <div onClick={()=>setVisible(false)}>
                    <img src={assets.dropdown_icon} className='rotate-[-180] w-12 p-4' alt="" />
                </div>

                <NavLink onClick={()=>setVisible(false)} className='py-4 border pl-41' to={'/'}>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 border pl-41' to={'/collections'}>Collections</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 border pl-41' to={'/about'}>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 border pl-41' to={'/contact'}>Contact</NavLink>
            </div>

         </div>
        </div>
    );
}

export default Navbar;