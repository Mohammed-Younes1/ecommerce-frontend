import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import { BsCart3 } from "react-icons/bs";

function NavBar() {
  return (
    <div className="isvisibleNav">
      <div className="bg-blue_cust border-b border-border-blue flex justify-between items-center px-[8%] py-4">
        <div className="text-white text-xl font-bold">Logo</div>
        <SearchBar />
      </div>
      <div className="bg-blue_cust flex items-center justify-between px-[8%] py-3">
        <ul className="flex font-sans text-lg w-[84%]">
          <li className="pr-[5%]">
            <Link to="/" className="text-white hover:text-gray-300 py-2">
              Home
            </Link>
          </li>
          <li className="pr-[5%]">
            <Link to="/collections" className="text-white hover:text-gray-300 py-2">
              Collections
            </Link>
          </li>
          <li className="px-[5%]">
            <Link to="/feature" className="text-white hover:text-gray-300 py-2">
              Feature
            </Link>
          </li>
          <li className="px-[5%]">
            <Link to="/contact" className="text-white hover:text-gray-300 py-2">
              Contact
            </Link>
          </li>
          <li className="px-[5%]">
            <Link to="/cart" className="text-white hover:text-gray-300 py-2">
              Cart
            </Link>
          </li>
          <li className="border-r border-gray-100  px-[5%]">
            <BsCart3 className="text-white  mt-[5px]" />
          </li>
          <li className="px-[4%]">
            <Link to="/login" className="text-white hover:text-gray-300 py-2">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
