import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const ProductItem=({id,image,name,price})=>{
    const {currency}=useContext(ShopContext)
    return ( 
        <Link className='text-gray-500 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img src={image[0]} className='hover:transition ease-in-out scale-100' alt="" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='font-medium text-sm'>{currency}{price}</p>

        </Link>

     );
}

export default ProductItem;