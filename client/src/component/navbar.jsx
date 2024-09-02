 // src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full  py-4 flex items-center">
      <div className="ml-4">
        <img src={logo} alt="Logo" className="h-14" /> {/* Adjust height as needed */}
      </div>
      <ul className="flex flex-grow justify-center space-x-10">
        <li>
          <Link to="/" className="text-red-500 font-bold hover:text-red-700">HOME</Link>
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
          <button className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600">DONATION</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
