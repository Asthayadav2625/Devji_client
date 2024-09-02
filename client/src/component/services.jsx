import React from "react";
import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.jpg";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto p-6">
        <div className="text-center my-8">
          <p className="text-black text-5xl font-bold">Our Services</p>
        </div>

        <div className="space-y-12 mt-10">
          {/* First Section */}
          <div className="flex flex-col md:flex-row items-start">
            <img src={service1} className="w-[400px]  md:w-1/3 h-[250px] object-cover mb-2 md:mb-0" alt="Service 1"/>
            <div className="md:ml-8 text-justify">
              <p className="text-lg text-black">
                At DVJEI, we stand as the <Link to="/services" className="text-sky-500">best eye hospital in Jabalpur</Link>, offering exceptional cataract eye care. Our team includes the best eye doctors in Jabalpur, dedicated to delivering personalized care. Our compassionate brand voice and tone create a welcoming environment, reassuring patients during their visit. We recognize the uniqueness of each patient, shaping our services to match their individual requirements.
                <br/><br/>
                If you’re in Jabalpur or nearby areas and looking for comprehensive eye care services, we’re here to help. We offer a range of services, including cataract surgery, LASIK surgery, glaucoma treatment, and pediatric ophthalmology, among others. Our experienced and dedicated team of ophthalmologists and support staff are here to provide the best possible care to our patients.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row items-start">
            <img src={service2} className="w-[500px] md:w-1/3 h-[250px] object-cover mb-2 md:mb-0" alt="Service 2"/>
            <div className="md:ml-8 text-justify">
              <p className="text-lg text-black">
                We offer a range of <Link to='/fellowship' className="text-sky-500">fellowship programs</Link> for aspiring ophthalmologists looking to <Link to={Services} className="text-sky-500 ">specialize in cataract surgery</Link>, surgical retina, glaucoma, cornea-anterior segment and refractive surgery, squint and pediatric ophthalmology, orbit and oculoplasty, and phaco and refractive surgery. Our <Link to='/fellowship' className="text-sky-500">fellowship programs</Link> are designed to provide hands-on training and practical experience to young ophthalmologists to excel in their chosen field.
                <br/><br/>
                If you’re looking for a short-term and long-term cataract fellowship in MP, you’ve come to the right place. We offer the best cataract surgery fellowship in MP, providing comprehensive training in the latest techniques and technologies for cataract surgery. Our experienced faculty and state-of-the-art infrastructure ensure that you receive the best possible training during your fellowship program.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-black">We’re committed to providing the best possible care to our patients. Contact us today to learn more about our fellowship programs and comprehensive eye care services.</p>
        </div>
      </div>
    </>
  )
};

export default Services;
