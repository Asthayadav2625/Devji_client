// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-10/12 rounded-2xl">
      <ul className="flex justify-center space-x-8 py-4">
        <li>
          <Link to="/" className="text-red-500 font-bold">HOME</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-red-500">SERVICES</Link>
        </li>
        <li>
          <Link to="/education" className="hover:text-red-500">EDUCATION</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-red-500">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-red-500">CONTACT</Link>
        </li>
        <li>
          <button className="bg-red-500 text-white py-2 px-4 rounded-full">DONATION</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
