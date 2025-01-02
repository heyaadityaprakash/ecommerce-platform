import React, { useState } from 'react';
function Login() {
    const[currState,setCurrState]=useState('Sign Up')

    const onSubmit=(e)=>{
        e.preventDefault()
    }
    return ( 
        <form action="" onSubmit={onSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-12 gap-4 text-gray-600'>
            <div className=''>
                <p className='text-2xl prata-regular'>{currState}</p>
                <hr className='border-none-h[1.2px]  bg-gray-800' />

            </div>

           {currState==='login'?'':<input type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-600'  required/>}
            <input type="email" placeholder='email' className='w-full px-3 py-2 border border-gray-600' required />
            <input type="password" placeholder='password' className='w-full px-3 py-2 border border-gray-600' required />
            <div className='w-full flex justify-between'>
                <p className='cursor-pointer'>forgot passowrd?</p>
                {currState==='login'?<p className='cursor-pointer' onClick={()=>setCurrState('signup')}>Create account</p>:<p className='cursor-pointer' onClick={()=>setCurrState('login')}>Login</p>}

            </div>

            <button className='bg-black text-white w-full px-2 py-2 mt-2 '>{currState==='login'?'Sign in':'Sign up'}</button>

        </form>
     );
}

export default Login;