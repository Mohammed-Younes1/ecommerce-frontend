import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="bg-gray-800">
        <ul className="flex justify-center">
          <li className="mr-6">
            <Link to="/" className="text-white hover:text-gray-300 px-3 py-2">Home</Link>
          </li>
          <li className="mr-6">
            <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2">About</Link>
          </li>
          <li className="mr-6">
            <Link to="/services" className="text-white hover:text-gray-300 px-3 py-2">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300 px-3 py-2">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
