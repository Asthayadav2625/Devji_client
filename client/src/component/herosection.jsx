import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero1.png";
import Body from "./body";
const Herosection=()=>{
 return (
    <>
      <div>
         <div>
            <div className="">
               <Header/>
            </div>
            <div>
               <Navbar/>
            </div>
            <div className="mb-2">
               <img src={hero1}/>
            </div>
            <div>
               <Body/>
            </div>
         </div>
      </div>
    </>
 )

}
export default Herosection;
