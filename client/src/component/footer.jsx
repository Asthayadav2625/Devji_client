import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="bg-gradient-to-b from-blue-200 to-blue-100 pt-10 pb-5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-semibold text-blue-800 mb-2">ADDRESS LIST</div>
            <ul className="text-blue-600">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Dvjei Netralaya Tilwara Near Tilwara Bridge,Jotpur,Jabalpur,Madhya Pradesh.
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" /> +07612636400,401,402
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> dvjei.jbp@gmail.com
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-between w-full md:w-auto">
            <div className="mb-6 md:mb-0 md:ml-10">
              <ul className="text-blue-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Appointment</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 md:ml-10">
              <ul className="text-blue-600">
                <li>Donation</li>
                <li>Contact Us</li>
                <li>T&C</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col md:ml-10">
              <h2 className="font-semibold text-blue-800 mb-2">Be Our Subscribers</h2>
              <p className="text-blue-600 mb-4">To get the latest news about health from our experts</p>
              <div className="flex">
                <input type="email" placeholder="example@email.com" className="px-4 py-2 rounded-l-md focus:outline-none" />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">Submit →</button>
              </div>
            </div>
          </div>
        </div> 
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-blue-600">
          <div className="mb-4 md:mb-0">Follow Us</div>
          <div className="flex space-x-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
            <FaMobileAlt />
          </div>
          <div className="text-sm mt-4 md:mt-0">&copy; 2024 DOAGuru IT Solution. All rights reserved.</div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;