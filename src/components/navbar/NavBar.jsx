import React from "react";
import SearchBar from "./SearchBar";
import { BsCart3 } from "react-icons/bs";
// import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="isvisibleNav">
      <div className="bg-blue_cust border-b border-border-blue flex justify-between items-center px-[6%] py-4">
        <div className="text-white text-xl font-bold ">Logo</div>
        <SearchBar />
      </div>
      <div className="bg-blue_cust flex  items-center px-[6%] py-3">
        <ul className="flex justify-center space-x-12 font-sans text-lg">
          <li className="">
            {/* <Link to="/" activeClassName="text-gray-300" className="text-white hover:text-gray-300 px-3 py-2">Home</Link> */}
            <a href="/" className="text-white hover:text-gray-300 py-2">
              Home
            </a>
          </li>
          <li className="">
            {/* <Link to="/about" activeClassName="text-gray-300" className="text-white hover:text-gray-300 px-3 py-2">About</Link> */}
            <a href="/" className="text-white hover:text-gray-300 py-2">
              Collections
            </a>
          </li>
          <li className="">
            {/* <Link to="/services" activeClassName="text-gray-300" className="text-white hover:text-gray-300 px-3 py-2">Services</Link> */}
            <a href="/" className="text-white hover:text-gray-300 py-2">
              Feature
            </a>
          </li>
          <li className="">
            {/* <Link to="/contact" activeClassName="text-gray-300" className="text-white hover:text-gray-300 px-3 py-2">Contact</Link> */}
            <a href="/" className="text-white hover:text-gray-300 py-2">
              Contact
            </a>
          </li>
          <li className="">
            {/* <Link to="/contact" activeClassName="text-gray-300" className="text-white hover:text-gray-300 px-3 py-2">Contact</Link> */}
            <a href="/" className="text-white hover:text-gray-300 py-2">
              Contact
            </a>
          </li>
          <li className="">
            {/* <Link to="/contact" activeClassName="text-gray-300" className="text-white hover:text-gray-300 px-3 py-2">Contact</Link> */}
            <a href="/" className="text-white hover:text-gray-300 py-2">
              Contact
            </a>
          </li>
          <li className="border-r border-gray-100   pr-4">
            <BsCart3 className="text-white" />
          </li>
          <li className="">
            {/* <Link to="/contact" activeClassName="text-gray-300" className="text-white hover:text-gray-300 px-3 py-2">Contact</Link> */}
            <a href="/" className="text-white hover:text-gray-300">
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
