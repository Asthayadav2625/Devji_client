import React from "react";
import logo from "../assets/logo.svg";
import { FaUser, FaStar } from 'react-icons/fa'; // Import FaStar from react-icons

const Excellent = () => {
  return (
    <>
      <div className="text-center m-10">
        <div className="text-black font-semibold text-xl p-1">Excellent</div>
        <div className="flex items-center justify-center p-1">
          <FaStar style={{color: "#FFD43B"}} /> {/* Use FaStar icon */}
          <FaStar style={{color: "#FFD43B"}} />
          <FaStar style={{color: "#FFD43B"}} />
          <FaStar style={{color: "#FFD43B"}} />
          <FaStar style={{color: "#FFD43B"}} />
        </div>
        <div>
          Based On <span className="text-black font-bold text-xl p-1">219 reviews</span>
        </div>
        <div className="flex items-center justify-center p-1">
          <img src={logo} alt="Logo" className="w-24 h-6 "/>
        </div>
      </div>
    </>
  );
};

export default Excellent;
