import React from "react";

function SupportHome() {
  return (
    <div className="grid px-8 grid-cols-4 lg:grid-cols-4 hlg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 xxsm:grid-cols-1 exsm:grid-cols-1 sm:text-left exsm:text-center bg-blue-light">
      <div className="border-t self-center">
        <h4 className="text-mid-greyish text-sm pt-[20px]">Expert advice</h4>
        <h1 className="text-dark-grey text-2xl font-medium">123-456-7890</h1>
      </div>
      <div className="border-t self-center ">
        <h4 className="text-mid-greyish text-sm pt-[20px]">Customer service</h4>
        <h1 className="text-dark-grey text-2xl font-medium">1-222-345-6789</h1>
      </div>
      <div className="border-t self-center">
        <h4 className="text-mid-greyish text-sm pt-[20px]">Have any questions?</h4>
        <h1 className="text-dark-grey text-2xl font-medium">Contact us</h1>
      </div>
      <div className="flex justify-center">
        <img src="support.png" alt="people-support" className="justify-center"></img>
      </div>
    </div>
  );
}

export default SupportHome;
