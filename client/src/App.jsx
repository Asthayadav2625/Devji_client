import React from "react";
import Herosection from "./component/herosection";
import Services from "./component/services";
import Excellent from "./component/excellent";
import Cards from "./component/cards";
import Appointment from './component/appointment';
import LearnMore from "./component/learnmore";
import DonateUs from "./component/donateUs";
import Footer from "./component/footer";
const App=()=>{
 return (
  <>
  <div>
     
    <Herosection/>
    <Services/>
    <Excellent/>
    <Cards/>
    <Appointment/>
    <LearnMore/>
    <DonateUs/>
    <Footer/>
    
  </div> 
</>

 )
}

export default App;