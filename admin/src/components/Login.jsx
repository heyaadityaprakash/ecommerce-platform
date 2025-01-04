import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { backendURL } from '../App';
import { toast } from 'react-toastify';

const Login=({setToken})=> {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    // auth amdin
    const onSubmit=async(e)=>{
        try {
            e.preventDefault()
            // console.log(email,password);
            const response=await axios.post(backendURL+'/api/user/adminlogin',{email,password})

            if(response.data.success){
                setToken(response.data.token)
            }
            else{
                toast.error(response.data.message)
            }


            
    
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }

    return ( 
        <div className='min-h-screen flex items-center justify-center'>
            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-semibold mb-4'>
                    Admin pannel
                </h1>

                <form onSubmit={onSubmit}>
                    <div className='mb-4 min-w-72'>
                        <p className='text-sm font-medium mb-2'>Email Address</p>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded w-full px-4 py-2 border border-gray-500 outline-none' type="email" placeholder='enter your email' required />
                    </div>

                    <div className='mb-4 min-w-72'>
                        <p className='text-sm font-medium mb-2'> Password</p>
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded w-full px-4 py-2 border border-gray-500 outline-none' type="password" placeholder='enter your password' required />
                    </div>
                    <button className='bg-black text-white w-full px-2 py-2 rounded' type='submit'>login</button>
                </form>
            </div>
        </div>
     );
}

export default Login;