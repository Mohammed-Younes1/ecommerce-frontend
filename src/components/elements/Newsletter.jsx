import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";

function Newsletter() {
  return (
    <div className="bg-blue-light grid px-8 grid-cols-2 hxl:grid-cols-4  hlg:grid-cols-2 xsm:grid-cols-1 py-[4rem]">
      <div className="flex r-border  "> 
        <IoMailOpenOutline className="h-[67px] w-[67px] "/>
        <h1 className="text-dark-grey text-xs xxsm::text-sm xsm:text-base md:text-xl font-semibold pr-5 mt-2 xsm:mt-0">Subscribe to our newsletter</h1>
      </div>
      <div className="">
        <h4 className="text-mid-greyish text-xxsm xxsm:text-xsmt xsm:text-xs md:text-sm mt-2 w-[100%] xsm:w-[60%]">
          Sign up for all the latest news and special offers
        </h4>
      </div>
      <div className="flex items-center col-span-2">
        <input
          type="email"
          placeholder="Your Email"
          className="w-[80%] h-10 px-4 mb-4 border border-gray-300  focus:outline-none focus:border-blue-500"
        />
        <div className="pl-4">
        <button className="w-20 xsm:w-32 h-10 text-xs xsm:text-base bg-dark-grey text-white transition-colors duration-300 hover:bg-blue-link mb-4">
          Subscribe
        </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
