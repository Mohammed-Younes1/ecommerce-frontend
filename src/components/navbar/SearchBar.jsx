import React from 'react';
import { IoMdSearch } from "react-icons/io";


const SearchBar = () => {
  return (
    <div className="flex items-center border rounded-sm overflow-hidden bg-white ">
      <input
        type="text"
        placeholder="Search product ..."
        className="py-2 px-4 focus:outline-none "
       
      />
      <IoMdSearch className="text-blue_cust w-[20px] h-[20px]"/>
      {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4">
        Search
      </button> */}
    </div>
  );
};

export default SearchBar;