import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
function List({token}) {

    const [list,setList]=useState([])

    const fetchList=async()=>{
        try {
            const response=await axios.get("http://localhost:4000/api/product/list",{headers:{token}})
            // console.log(response.data);
            if(response.data.success){
                setList(response.data.products)

            }
            else{
                toast.error(response.data.message)
            }
            
        } catch (error) {
           
        }

    }

    const removeProduct=async(id)=>{
        try {
            const response=await axios.post("http://localhost:4000/api/product/remove",{id},{headers:{token}})

            if(response.data.success){
                toast.success(response.data.message)
                await fetchList()
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
             
        }

    }

    useEffect(()=>{
        fetchList()
    },[])

    return ( 
       <>
       <p className='mb-2'> All Products</p>
       <div className='flex flex-col gap-2'>

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-2 border text-sm bg-gray-100'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b className='text-center'>Action</b>
        </div>

        {
            list.map((item,index)=>(
                <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-2 border text-sm '>
                    <img className='w-12' src={item.image[0] ? item.image[0]:assets.upload_area} alt="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                    <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>

                </div>

            ))
        }

          
       </div>
       </>
     );
}

export default List;