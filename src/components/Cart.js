import React from "react";
import { useSelector } from "react-redux";
import CartList from "./CartList";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.cartProducts);
  if(cartItems.lenth === 0) return <h1>Please add the item in the cart......</h1>
  return (
    <div >
        <h1 className="text-3xl text-center mt-5">cart</h1>
    <div className="flex flex-col lg:px-36 xs:px-10 mt-5">
    {cartItems.map((cartProduct ,index) => (
        <CartList
          className=""
          key={index} 
          item={cartProduct}
        ></CartList>
      ))}
    </div>
    </div>
  );
};

export default Cart;
