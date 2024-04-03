import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
// import { Link } from 'react-router-dom';

function NavMobile() {
  return (
    <>
      <div className="bg-blue_cust border-b border-border-blue flex justify-between items-center px-[6%] py-4">
        <RxHamburgerMenu className="text-white w-[22px] h-[22px]" />
        <div className="text-white text-xl font-bold ">Logo</div>
        <BsCart3 className="text-white w-[22px] h-[22px]" />
      </div>
      <div className="bg-blue_cust flex  items-center px-[6%] py-3"></div>
    </>
  );
}

export default NavMobile;
