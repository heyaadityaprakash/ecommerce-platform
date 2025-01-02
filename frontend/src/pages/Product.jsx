import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
function Product() {
    const {productid}=useParams()
    // console.log(productid);

    const {products,currency,addToCart}=useContext(ShopContext)

    const[productData,setProductData]=useState(false)
    const[image,setImage]=useState('')

    const[size,setSize]=useState('')

    const fetchProductData=()=>{
        products.map((item)=>{
            if(item._id==productid){
                setProductData(item)
                // console.log(item);

                setImage(item.image[0])
                
                return null;
            }
        })

    }

    useEffect(()=>{
        fetchProductData()
    },[productid,products])

    return productData? ( 
        <div className='border-t pt-10 transition-opacity ease-in duration-300 opacity-100'>
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
                {/* images */}

                <div className='flex-1 flex  flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item,index)=>(
                                <img src={item} key={index} onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-4 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }

                    </div>

                       <div className="w-full sm:w-[80%]">
                    <img src={image} className="w-full h-auto" alt="Product Large View" />
                </div>
                </div>
            
            {/* prod details */}
                <div className='flex-1 '>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} className='w-3.5' alt="" />
                        <img src={assets.star_icon} className='w-3.5' alt="" />
                        <img src={assets.star_icon} className='w-3.5' alt="" />
                        <img src={assets.star_icon} className='w-3.5' alt="" />
                        <img src={assets.star_dull_icon} className='w-3.5' alt="" />

                        <p className='pl-2'>(200)</p>
                    </div>
                    <p className='mt-4 text-2xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-4 text-gray-600 md:w-4/5'>{productData.description}</p>

                    <div className='flex flex-col gap-4 my-10'>
                        <p>Select your size</p>
                        <div className='flex gap-2'>
                            {
                                productData.sizes.map((item,index)=>(
                                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 ${item===size?'border-orange-400':'' }`} key={index}>{item}</button>
                                ))
                            }

                        </div>

                    </div>

                    <button className='bg-black text-white px-6 py-2 active:bg-gray-600' onClick={()=>{addToCart(productData._id,size)}}>Add to cart</button>
                    <hr className='mt-8 sm:w-4/5' />

                    <div className='text-sm text-gray-600 mt-5 flex flex-col gap-1'>
                        <p>100% Genuine</p>
                        <p>COD is available </p>
                        <p>Exchange or Return within 7 days</p>
                    </div>

                </div>
            </div>
                    {/* item desc and reviews */}
                    <div className='mt-12'>
                        <div className='flex '>
                            <b className='border px-5 py-3 text-sm '>Description</b>
                            <b className='border px-5 py-3 text-sm '>Reviews (12)</b>
                        </div>
                            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600 '>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
                                <p>Atque consectetur iure consequuntur distinctio dolorem quaerat. Ducimus recusandae quae eveniet architecto mollitia obcaecati nemo quas, non, blanditiis itaque nam dolore doloribus</p>
                                
                            </div>
                    </div>

                    {/* related prods */}
                    <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
              
        </div>
     ):
     <div className='opacity-0'>

     </div>
}

export default Product;