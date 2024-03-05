import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CART from "../images/cart.jpeg";
import LOGO from "../images/logo.png";

const Header = () => {
  const cartItems = useSelector((store) => store?.cart?.cartProducts);

  return (
    <nav className="flex justify-between shadow-xl pt-4">
      <div className="m-2">
      <img className="h-14 w-14 " src={LOGO} />
      </div>
      <div className="p-2 flex mt-2">
        <div className="mx-2 ">
          <Link to="/">Home</Link>
        </div>
        <div className="mx-2 ">
          <Link to="/about"> About</Link>
        </div>
        <div className="mx-2">
          <Link to="/cart">
            <div className="flex">
              <img className="h-12 w-13 " src={CART} />
              <span className="relative -ml-3">{cartItems?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
