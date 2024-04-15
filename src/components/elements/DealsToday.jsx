import React, { useState } from "react";
import { Link } from "react-router-dom";
import TestDeals from "../data/TestDeals";

function DealsToday() {
  const [TestDealsInfo] = useState(TestDeals);

  //    newprice=price-(price*(discount_percent/100))
  return (
    <div className="bg-blue-light   py-8 px-8">
      <div className="border bg-white">
        <div className="flex">
          <h1 className="font-sans font-medium text-2xl p-4">
            Today’s best deal
          </h1>
          <Link to={"/"} className="text-blue-link font-medium self-center pl-2 mt-[3px]">
            See more
          </Link>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 xxsm:grid-cols-1 exsm:grid-cols-1">
          {TestDealsInfo.map((item) => {
            const discountedPrice =
              item.price * (1 - item.discount_percent / 100);

            return (
              <div key={item.id} className="relative bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  // className="w-full h-[340px] object-cover rounded-none lg:w-[280px] lg:h-[300px] md:w-[270px] md:h-[330px] sm:w-[250px] sm:h-[300px] xsm:w-[240px] xsm:h-[290px] xxsm:w-[300px] xxsm:h-[325px] exsm:w-[290px] exsm:h-[320px] mx-auto"
                  className="w-full  object-cover rounded-none lg:w-[280px]  md:w-[270px]  sm:w-[250px]  xsm:w-[240px] xxsm:w-[300px]  exsm:w-[290px]  mx-auto"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white p-4 xl:text-lg lg:text-base md:text-base sm:text-sm xsm:text-sm xxsm:text-sm exsm:text-sm">
                  <h1 className="font-semibold mb-2 text-center">
                    {item.name}
                  </h1>
                  <h5 className="text-gray-700   text-center pb-2 px-4">
                    {item.description}
                  </h5>
                  <div className="flex justify-center ">
                    <h5 className="text-sm text-gray-400 line-through">
                      ${item.price}
                    </h5>
                    <h5 className="text-sm font-semibold text-gray-700 ">
                      ${discountedPrice.toFixed(2)}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DealsToday;
