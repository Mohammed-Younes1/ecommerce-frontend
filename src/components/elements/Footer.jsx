import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-blue-light grid px-8 grid-cols-1 xsm:grid-cols-4 pt-[80px] pb-[0px] xsm:pb-[40px]">
      <div className="justify-self-center xsm:justify-self-start py-7 xsm:py-0 text-center xsm:text-left">Logo</div>
      <div className="justify-self-center xsm:justify-self-start py-7 xsm:py-0 text-center xsm:text-left">
        <h1 className="text-2xl xsm:text-xl md:text-2xl text-dark-grey font-medium pb-10">Shop</h1>
        <Link to={"/"} className="text-blue-link text-base xsm:text-sm md:text-base block font-light hover:text-blue-link-hover">hot deals</Link>
        <Link to={"/"} className="text-blue-link text-base xsm:text-sm md:text-base block font-light hover:text-blue-link-hover">Categories</Link>
        <Link to={"/"} className="text-blue-link text-base xsm:text-sm md:text-base block font-light hover:text-blue-link-hover">Brands</Link>
        <Link to={"/"} className="text-blue-link text-base xsm:text-sm md:text-base block font-light hover:text-blue-link-hover">Weekly deals</Link>
      </div>
      <div className="justify-self-center xsm:justify-self-start py-7 xsm:py-0 text-center xsm:text-left">
        <h1 className="text-2xl xsm:text-xl md:text-2xl text-dark-grey font-medium pb-10">Need Help?</h1>
        <Link to={"/"} className="text-blue-link text-base xsm:text-sm md:text-base block font-light hover:text-blue-link-hover">Contact</Link>
        <Link to={"/"} className="text-blue-link text-base xsm:text-sm md:text-base block font-light hover:text-blue-link-hover">FAQs</Link>
        <Link to={"/"} className="text-blue-link text-base xsm:text-sm md:text-base block font-light hover:text-blue-link-hover">Return policy</Link>
        <Link to={"/"} className="text-blue-link text-base xsm:text-sm md:text-base block font-light hover:text-blue-link-hover">Privacy policy</Link>
      </div>
      <div className="justify-self-center xsm:justify-self-start py-7 xsm:py-0 text-center xsm:text-left">
        <h1 className="text-2xl xsm:text-xl md:text-2xl text-dark-grey font-medium pb-10">Contact</h1>
        <h4 className="text-blue-link text-base xsm:text-sm md:text-base font-light">test street </h4>
        <h4 className="text-blue-link text-base xsm:text-sm md:text-base font-light">test city</h4>
        <h4 className="text-blue-link text-base xsm:text-sm md:text-base font-light">test@test.test</h4>
        <h4 className="text-blue-link text-base xsm:text-sm md:text-base font-light">123-456-7890</h4>
      </div>
    </div>
  );
}

export default Footer;
