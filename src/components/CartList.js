import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../store/cartSlice";

const CartList = ({ item }) => {
  const { image, price, title, id } = item;
  const dispatch = useDispatch();

  const handleRemoveBtn = (id) => {
    dispatch(removeCart(id));
  };
  return (
    <div className=" shadow-lg my-4 py-4 px-4 mx-4">
      <div className="flex justify-between ">
        <img src={image} alt="" className="object-fit object-contain h-20" />
        <h4 className="font-bold text-lg w-2/4 mx-6">{title}</h4>
        <h4 className="w-1/4"> $ {price}</h4>
        <button
          onClick={() => {
            handleRemoveBtn(id);
          }}
          type="button"
          className="px-3 bg-orange-700  text-white rounded-md h-10 w-1.5/6"
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartList;
