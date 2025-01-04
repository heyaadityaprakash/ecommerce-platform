import React from 'react';
import {assets} from '../assets/assets.js';
const Navbar=({setToken})=>{
    
    return ( 
        <div className='flex items-center py-2 px-5 justify-between'>
            <img src={assets.logo} className='w-[max(10%,80px)]' alt="" />
            <button onClick={()=>setToken('')} className='bg-gray-800 text-white px-4 py-2 sm:px-7 sm:py-2 rounded-full'>Log Out</button>
        </div>
     );
}

export default Navbar;