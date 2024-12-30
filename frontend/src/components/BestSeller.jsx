import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [BestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        // console.log(bestProduct);
        
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    return (
        <div className="my-10">
            <div className="text-center">
                <Title text1={"BEST"} text2={"SELLERS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quod error.
                </p>
            </div>

            <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 gap-y-6 my-5 mx-4">
                {BestSeller.length > 0 ? (
                    BestSeller.map((item, index) => (
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
    );
};

export default BestSeller;
