import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();
import  { useNavigate } from "react-router-dom";

const ShopContextProvider = (props) => {
  const currency = "$";
  const dilivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState({});

 const navigate=useNavigate()

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select your size !");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const i in cartItems) {
      for (const j in cartItems[i]) {
        try {
          if (cartItems[i][j] > 0) {
            totalCount += cartItems[i][j];
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    return totalCount;
  };

  const getCartAmount=()=>{
    let totalAmount=0;
    for(const i in cartItems){
      let itemInfo=products.find((product)=>product._id===i)
      for(const j in cartItems[i]){
        try{
          if(cartItems[i][j]>0){
            totalAmount+=itemInfo.price*cartItems[i][j]
          }
        }
        catch(err){
          console.log(err)
      }
    }
    return totalAmount

  }
}

  
  const updateQuantity=async(itemId,size,quantity)=>{
    let cartData=structuredClone(cartItems)

    cartData[itemId][size]=quantity
    setCartItems(cartData)

  }
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    dilivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,updateQuantity,getCartAmount
    ,navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
