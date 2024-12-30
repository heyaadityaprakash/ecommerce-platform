import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollections() {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = React.useState([]);

    // Display 10 prod
    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div className="my-10">
            <div>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique veniam labore officia non quas,
                    nesciunt quam ad iure dolor blanditiis.
                </p>
            </div>

            {/* Products */}
            <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 gap-y-6 my-5 mx-4">
                {latestProducts.length > 0 ? (
                    latestProducts.map((item,index) => (
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
}

export default LatestCollections;
