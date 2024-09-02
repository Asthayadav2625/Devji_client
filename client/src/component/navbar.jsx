 // src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full  py-4 flex items-center justify-around">
      <div className="ml-4">
        <img src={logo} alt="Logo" className="h-20 w-20" /> {/* Adjust height as needed */}
      </div>
      <div className='flex space-x-52' >
      <ul className="flex flex-grow justify-center space-x-20">
        <li>
          <Link to="/" className="text-blue-600 font-bold hover:text-blue-700">HOME</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-500 font-bold">SERVICES</Link>
        </li>
        <li>
          <Link to="/education" className="hover:text-blue-500 font-bold">EDUCATION</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500 font-bold">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500 font-bold">CONTACT</Link>
        </li>
      </ul>
       
      <div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-red-600">DONATION</button>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
