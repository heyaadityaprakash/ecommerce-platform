import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
function Searchbar() {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
   
    
    return (showSearch)? ( 
        <div className=' border-b  text-center'>
            <div className='inline-flex items-center justify-between border border-gray-500 px-5 py-2 my-5 mx-3 rounded-full w-full sm:w-1/2'>
                <input type="text" placeholder='search' className='flex-1 outline-none bg-inherit ' value={search} onChange={(e)=>setSearch(e.target.value)}  />
                <img src={assets.search_icon}  alt="" className='w-4' />
            </div>
                <img src={assets.cross_icon} className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)} alt="" />
        </div>
     ):null
}

export default Searchbar;