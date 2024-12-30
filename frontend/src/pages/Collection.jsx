import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
function Collection() {

    const {products,search,showSearch}=useContext(ShopContext)

    const[showFilter,setShowFilter]=useState(false)

    const[filterProducts,setFilterProducts]=useState([])

    const[category,setCategory]=useState([])
    const[subcategory,setSubCategory]=useState([])

    const[sortType,setSortType]=useState('relevance')

    const toggleCategory=(e)=>{
        if(category.includes(e.target.value)){
            setCategory(prev=>prev.filter(item=>item!=e.target.value))

        }else{
            setCategory(prev=>[...prev,e.target.value])
        }
    }

    const toggleSubCategory=(e)=>{
        if(subcategory.includes(e.target.value)){
            setSubCategory(prev=>prev.filter(item=>item!=e.target.value))
        }
        else{
            setSubCategory(prev=>[...prev,e.target.value])
        }
    }


    const applyFilter=()=>{
        // create a copy of array of products
        let productsCopy=products.slice()

        if(showSearch && search){
            productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if(category.length>0){
            productsCopy=productsCopy.filter(item=>category.includes(item.category))
        }
        if(subcategory.length>0){
            productsCopy=productsCopy.filter(item=>subcategory.includes(item.subcategory))
        }
        setFilterProducts(productsCopy)
    }

    //logic for filter
    useEffect(()=>{
        applyFilter()

    },[category,subcategory,search,showSearch])



    // sort prods
    const sortProducts=()=>{
        let filterProdCopy=filterProducts.slice()

        switch (sortType) {
            case 'Price:High to Low':
                setFilterProducts(filterProdCopy.sort((a,b)=>(b.price-a.price)))
                
                break;
            case 'Price:Low to High':
                setFilterProducts(filterProdCopy.sort((a,b)=>(a.price-b.price)))
                break;
        
            default:
                applyFilter()
                break;
        }

    }

    useEffect(()=>{
        sortProducts()
    },[sortType])

    return ( 
        <div>
            <div className='flex flex-col sm:flex-row gap-1 s:gap-10 pt-10 border-t'>
                {/* filters */}
                <div className='min-w-60'>
                    <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters</p>
                    <img src={assets.dropdown_icon} className={`h-4 sm:hidden ${showFilter?'rotate-90':''}`} alt="" />

                    <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
                        <p className='mb-3 text-sm font-medium'>Categories</p>
                        <div className='flex flex-col gap-2 text-sm font-light'>
                            <p className='flex gap-2'>
                                <input type="checkbox" value={'Men'}onChange={toggleCategory}  />Men
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" value={'Women'}onChange={toggleCategory}  />Women
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" value={'Children'}onChange={toggleCategory}  />Children
                            </p>
                        </div>
                    </div>

                    {/* sub cat */}
                    <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block`}>
                        <p className='mb-3 text-sm font-medium'>Apparel Type</p>
                        <div className='flex flex-col gap-2 text-sm font-light'>
                            <p className='flex gap-2'>
                                <input type="checkbox" value={'Topwear'}onChange={toggleSubCategory}  />Topwear
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" value={'Bottomwear'}onChange={toggleSubCategory}  />Bottomwear
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" value={'Footwear'}onChange={toggleSubCategory}  />Footwear
                            </p>
                        </div>
                    </div>
                    

                </div>

                {/* right side */}
                <div className='flex-1'>
                    <div className='flex justify-between text-base sm:text-2xl mb-4 px-4'>
                        <Title text1={'All'} text2={'Collections'}/>
                        {/* sort */}

                        <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-500 text-sm px-2' >
                            <option value="relevance">relevance</option>
                            <option value="Price:High to Low">Price:High to Low</option>
                            <option value="Price:Low to high">Price:Low to high</option>
                        </select>
                    </div>

                    {/* all prod */}
                    <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 gap-y-6 my-5 mx-4">
                    {filterProducts.length > 0 ? (
                    filterProducts.map((item,index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                ) : (
                    <p className="text-center col-span-full">No products available</p>
                )}
            </div>

                </div>

            </div>
        </div>
     );
}

export default Collection;