import React from "react";
import { Link } from "react-router";
import {useSelector } from "react-redux";

const Header = () => {
  
 const cartItems = useSelector((store) => store.cart.items);
  

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-amber-200 lg:bg-blue-600">
      <div className="">
        <h2 className="w-30 my-10 mx-4 px-4 font-bold">Shopping cart</h2>
      </div>
      <div className="flex items-center">
        <ul className="flex py-10 px-10">
          
        
          <li className="px-4 font-bold">
           <Link to="/cart"> 🛒Cart({cartItems.length})</Link>
          </li>
         
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
