import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bodyimg from "../assets/bodyimg.jpg.webp";
import freecamp1 from '../assets/freecamp1.webp';
import freecamp2 from '../assets/freecamp2.webp';
import freecamp3 from '../assets/freecamp3.webp';
import freecamp4 from '../assets/freecamp4.webp';
import freecamp5 from '../assets/freecamp5.webp';
import freecamp6 from '../assets/freecamp6.webp';
import freecamp7 from '../assets/freecamp7.webp';
import freecamp8 from '../assets/freecamp8.webp';
import freecamp9 from '../assets/freecamp9.webp';
import freecamp10 from '../assets/freecamp10.webp';
// Import other images similarly

const Body = () => {
  const images = [
    freecamp1,
    freecamp2,
    freecamp3,
    freecamp4,
    freecamp5,
    freecamp6,
    freecamp7,
    freecamp8,
    freecamp9,
    freecamp10,

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Constant Background Image */}
      <img
        src={bodyimg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />


      <div className="absolute inset-0 bg-[#A1D6E2] opacity-90"></div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center h-full w-full">
        <div className="container justify-around   flex flex-col md:flex-row items-center   md:px-8">
          {/* Left Image Slider */}
          <div className="w-full ml-32 mb-4 md:mb-0 relative z-10">
            <img
              src={images[currentImageIndex]}
              alt="Camp Activities"
              className="w-[550px] h-[600px] shadow-lg object-cover rounded-xl"
            />
          </div>

          {/* Right Content */}
           
          <div className="w-full  md:pl-4 mr-56 p-5 mt-20">
            
            <div 
            style={{ margin: '-148px 0 0 -100px' }}
            className='absolute bg-white w-[500px] h-34 mb-10 shadow-lg z-20'>
              {/* <div className='items-center pl-16 m-5'>

               <h2 className="text-5xl text-black font-semibold ">FREE CAMP FOR EYE CHECKUPS</h2>
              </div> */}
                <h2 className="p-5 text-5xl text-black font-semibold">
                  FREE CAMP FOR EYE CHECKUPS
                </h2>
               

            </div>
            <p className="text-lg text-white mb-6">
              There are many people in our country, who never think and care for their eyes,
              we are organizing free camps of eye checkups at various remote areas, and providing
              best-in-class treatments, free of cost donation of eye glasses, medicines and healthy
              foods to all attendees. These events improve awareness and eye care for those who cannot
              think to visit the best eye hospital in Jabalpur.
            </p>
            <Link
              to="/gallery"
              className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              VISIT OUR GALLERY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
