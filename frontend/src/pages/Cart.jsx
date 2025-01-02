import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { products, currency, cartItems, updateQuantity,navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const i in cartItems) {
      for (const j in cartItems[i]) {
        if (cartItems[i][j] > 0) {
          tempData.push({
            _id: i,
            size: j,
            quantity: cartItems[i][j],
          });
        }
      }
    }
    setCartData(tempData);
    console.log("Processed cart data:", tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-12">
      <div className="text-2xl mb-2">
        <Title text1="Your" text2="Cart" />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          if (!productData) {
            return <p key={index}>Product not found</p>;
          }
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-grey-600 grid grid-cols-[4ft_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-2">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div>
                    <p className="flex items-center gap-5 mt-2 ">
                      {currency} {productData.price}
                    </p>
                    <p className="px-4 sm:px-3 sm:py-1 border bg-slate-100">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                type="number"
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value > 0) {
                    updateQuantity(item._id, item.size, value);
                  }
                }}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                src={assets.bin_icon}
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 sm:w-5 cursor-pointer "
                alt=""
              />
            </div>
          );
        })}
      </div>
        <div className="flex justify-end my-20">
            <div className="w-full sm:w-[1/12]">
            <div className="w-full text-center">
            <CartTotal/>
                <button onClick={()=>navigate('/place-oder')} className="w-full text-center bg-black text-slate-100 py-2 mt-2">Proceed to checkout</button>

            </div>
            </div>

        </div>

    </div>
  );
}

export default Cart;
