import React, { useState } from "react";
import categorylist from "../data/CatagoryList";

function Category() {
  const [categoryListInfo] = useState(categorylist);

  return (
    <div className="bg-blue-light   py-8 px-8">
      <div className="border bg-white grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 xxsm:grid-cols-1 exsm:grid-cols-1">
        {categoryListInfo.map((item) => (
          <div key={item.id} className="relative bg-white  ">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[340px] object-cover rounded-none lg:w-[280px] lg:h-[300px] md:w-[270px] md:h-[330px] sm:w-[250px] sm:h-[300px] xsm:w-[240px] xsm:h-[290px] xxsm:w-[300px] xxsm:h-[325px] exsm:w-[290px] exsm:h-[320px] mx-auto"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white p-4 xl:text-lg lg:text-base md:text-base sm:text-sm xsm:text-sm xxsm:text-sm exsm:text-sm">
              <h1 className="font-semibold mb-2 text-center">
                {item.name.toUpperCase()}
              </h1>
              <h3 className="text-gray-600 text-center">{item.quantity}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Category;
