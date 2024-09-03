// src/components/Header.js
import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

// <FontAwesomeIcon icon={faPhone} style={{color: "#fffdf5",}} />
const Header = () => {
  return (
    <div className="bg-[#1995AD] w-full h-12 flex   items-center space-x-6 px-4 text-white">
      <div className="flex ">
       <FaEnvelope className="m-2"/>
      <span className="text-sm font-semibold m-2">dvjei.jbp@gmail.com</span>

      </div>
      <div className="flex ">
      <FaPhone className="m-2"/>
      <span className="text-sm m-2 font-semibold">24/7 Customer Support</span>
      </div>
    </div>
  );
};

export default Header;
