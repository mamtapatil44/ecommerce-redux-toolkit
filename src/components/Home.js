import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useProducts from "../custome-hooks/useProducts";
import Product from "./Product";

const Home = () => {
  useProducts();
  const allProducts = useSelector((store) => store?.product?.allProducts);
  if (!allProducts) return;
  return (
    <div>
       <h1 className="text-[30px] font-bold text-center mt-7">
        Welcome to Redux Toolkit Store
      </h1>

    <div className="flex flex-wrap justify-evenly gap-x-10 gap-y-8">
      {allProducts.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
    </div>
  );
};

export default Home;
