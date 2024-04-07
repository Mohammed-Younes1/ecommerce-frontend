import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
// import { Link } from 'react-router-dom';

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-blue_cust border-b border-border-blue flex justify-between items-center px-[6%] py-4">
        <div className="flex items-center">
          <div className="mt-[2px]" onClick={toggleMenu}>
            {!isOpen ? (
              <IoCloseOutline className="text-white w-[25px] h-[25px]" />
            ) : (
              <RxHamburgerMenu className="text-white w-[25px] h-[25px]" />
            )}
          </div>
          <div className="text-white text-xl font-bold ml-4">Logo</div>
        </div>
        <BsCart3 className="text-white w-[25px] h-[25px]" />
      </div>

      {/* dropdown */}
      {isOpen && ( <div>
        <div className="bg-white flex font-light text-left">
          <ul className="font-sans text-sm w-[100px] pl-[27px] py-[10px]">
            <li className="py-[8px]">
              <a href="/" className="text-blue_cust hover:text-border-blue py-2">
                Home 
              </a>
            </li>
            <li className="py-[8px]">
              <a href="/" className="text-blue_cust hover:text-border-blue py-2">
                Collections
              </a>
            </li>
            <li className="py-[8px]">
              <a href="/" className="text-blue_cust hover:text-border-blue py-2">
                Feature
              </a>
            </li>
            <li className="py-[8px]">
              <a href="/" className="text-blue_cust hover:text-border-blue py-2">
                Contact
              </a>
            </li>
            <li className="py-[8px]">
              <a href="/" className="text-blue_cust hover:text-border-blue py-2">
                Contact
              </a>
            </li>
            <li className="py-[8px]">
              <a href="/" className="text-blue_cust hover:text-border-blue py-2">
                Contact
              </a>
            </li>
           
            <li className="py-[8px]">
              <a href="/" className="text-blue_cust hover:text-border-blue">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>)}
      
    </>
  );
}

export default NavMobile;
