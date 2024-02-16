import React, { useEffect } from "react";
import { FETCH_PRODUCT_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { allProduct } from "../store/productSlice";

const useProducts = () => {
    
  const dispatch = useDispatch();
  const getAllProducts = async () => {
    const data = await fetch(FETCH_PRODUCT_URL);
    const json = await data.json();
    dispatch(allProduct(json));
  };
  useEffect(() => {
    getAllProducts();
  }, []);
};

export default useProducts;
