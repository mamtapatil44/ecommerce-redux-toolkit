import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, image, price, title } = product;
  const handleAddBtn = (product) => {
    dispatch(addToCart(product))
  };
  return (
    <div className="card w-72 px-5 py-5 bg-white rounded-lg shadow-lg hover:bg-gray-200">
      <img src={image} alt="" className="h-32 d-block mx-auto" />

      <p className="text-[14px] leading-1  my-8 h-14 font-bold text-center">{title}</p>
      <p className="text-[13px] font-bold  text-center">RS {price} /-</p>
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={() => {
            handleAddBtn(product);
          }}
          className="btn bg-blue-500 text-[15px] px-4 text-white font-bold py-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
