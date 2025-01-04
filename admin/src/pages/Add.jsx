import React from 'react';
import { assets } from '../assets/assets';
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'
function Add({token}) {

// store images
    const [image1,setimage1]=useState(false)
    const [image2,setimage2]=useState(false)
    const [image3,setimage3]=useState(false)
    const [image4,setimage4]=useState(false)

// store the data
    const [name,setName]=useState(" ")
    const [description,setDescription]=useState(" ")
    const [price,setPrice]=useState(" ")
    const [category,setCategory]=useState("Men")
    const [subCategory,setSubCategory]=useState("Topwear")
    const [bestSeller,setBestSeller]=useState(false)
    const [sizes,setSizes]=useState([])

    // console.log('Backend URL:', `${backendURL}/api/product/add`);



    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const formData=new FormData()

            formData.append("name",name)
            formData.append("description",description)
            formData.append("category",category)
            formData.append("subcategory",subCategory)
            formData.append("price",price)
            formData.append("bestseller",bestSeller)
            formData.append("sizes",JSON.stringify(sizes))

            image1 && formData.append("image1",image1)
            image2 && formData.append("image2",image2)
            image3 && formData.append("image3",image3)
            image4 && formData.append("image4",image4)


            const response=await axios.post("http://localhost:4000/api/product/add",formData,{headers:{token}})
            // console.log(response.data);

            if(response.data.success){
                toast.success(response.data.message)
                setName("")
                setDescription("")
                setimage1(false)
                setimage2(false)
                setimage3(false)
                setimage4(false)
                setPrice("")

                
            }else{
                toast.error(response.data.message)
            }
            

        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }




    return ( 
        <form  onSubmit={handleSubmit} className='flex flex-col w-full items-start gap-4'>
            <div>
                <p>Upload Image</p>
                <div className='flex gap-4 mt-4'>
                    <label htmlFor="image1" className='cursor-pointer'>
                        <img className='w-40' src={!image1 ?assets.upload_area:URL.createObjectURL(image1)} alt="" />
                        <input onChange={(event)=>setimage1(event.target.files[0])} type="file" name="" id="image1" hidden />
                    </label>

                    <label htmlFor="image2" className='cursor-pointer'>
                        <img className='w-40' src={!image2? assets.upload_area:URL.createObjectURL(image2) } alt="" />
                        <input onChange={(event)=>setimage2(event.target.files[0])} type="file" name="" id="image2" hidden />
                    </label>

                    <label htmlFor="image3" className='cursor-pointer'>
                        <img className='w-40' src={!image3? assets.upload_area: URL.createObjectURL(image3)} alt="" />
                        <input onChange={(event)=>setimage3(event.target.files[0])} type="file" name="" id="image3" hidden />
                    </label>

                    <label htmlFor="image4" className='cursor-pointer'>
                        <img className='w-40' src={!image4? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                        <input onChange={(event)=>setimage4(event.target.files[0])} type="file" name="" id="image4" hidden />
                    </label>
                </div>
            </div>


            <div className='w-full'>
                <p className='mb-2'>Product Name</p>
                <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] py-2 px-4' type="text" placeholder=' type here' required name="" id="" />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product Description </p>
                <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] py-2 px-4' type="text" placeholder=' type description' required name="" id="" />
            </div>

            <div className='flex flex-col sm:flex-row gap-4 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Product Catogory</p>
                    <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-4 py-2' >
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Children">Children</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Product Sub Catogory</p>
                    <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-4 py-2' >
                        <option value="Topwear">Top wear</option>
                        <option value="Bottomwear">Bottom wear</option>
                        <option value="Winterwear">Winter wear</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Product Price</p>
                    <input onChange={(e)=>setPrice(e.target.value)} value={price} className='px-4 py-2 w-40' type="number" placeholder='$0+' />
                </div>
            </div>


            <div>
                <p className='mb-2'>Product Sizes</p>
                <div className='flex gap-4'>
                    <div onClick={()=>setSizes(prev=> prev.includes("S") ? prev.filter(item=>item!=="S") :[...prev,"S"])}>
                        <p className={ `${sizes.includes("S")? "bg-black text-white" :"bg-slate-300" } px-4 py-2 cursor-pointer`}>S</p>
                    </div>
                    <div onClick={()=>setSizes(prev=> prev.includes("M") ? prev.filter(item=>item!=="M") :[...prev,"M"])}>
                        <p  className={ `${sizes.includes("M")? "bg-black text-white" :"bg-slate-300" } px-4 py-2 cursor-pointer`} >M</p>
                    </div>
                    <div onClick={()=>setSizes(prev=> prev.includes("L") ? prev.filter(item=>item!=="L") :[...prev,"L"])}>
                        <p  className={ `${sizes.includes("L")? "bg-black text-white" :"bg-slate-300" } px-4 py-2 cursor-pointer`}>L</p>
                    </div>
                    <div onClick={()=>setSizes(prev=> prev.includes("XL") ? prev.filter(item=>item!=="XL") :[...prev,"XL"])}>
                        <p  className={ `${sizes.includes("XL")? "bg-black text-white" :"bg-slate-300" } px-4 py-2 cursor-pointer`}>XL</p>
                    </div>
                </div>
            </div>


            <div className='flex gap-2 mt-2'>
            <input onChange={()=>setBestSeller(prev=>!prev)} checked={bestSeller} type="checkbox" id='bestseller' />
            <label className='cursor-pointer' htmlFor="bestseller"> Add to best seller</label>
            </div>


            <button type='text' className='bg-black text-white w-28 px-2 py-2 text-center'>Add</button>
        </form>
     );
}

export default Add;
<div>Add</div>