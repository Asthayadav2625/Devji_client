// import React from "react";
// import CardDesign from "./cardDesign";
// const Cards=()=>{
//     const cardData=[
//         { 
//             id:1,
//             userName:"astha",
//             description:"this is my review"
//          },
//          {
//             id:2,
//             userName:"astha",
//             description:"this is my review"
//          },{
//             id:3,
//             userName:"astha",
//             description:"this is my review"
//          },{
//             id:4,
//             userName:"astha",
//             description:"this is my review"
//          },{
//             id:5,
//             userName:"astha",
//             description:""
//          },
//     ]
//     return (
//         <>
//           <div className="flex flex-wrap space-x-10">
             
//             {cardData.map((card)=>(
//                 <CardDesign key={card.id} data={card}/>

//             ))}
//           </div>
//         </>
//     )
// };

// export default Cards;

import React from "react";
import CardDesign from "./cardDesign";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
    const cardData = [
        {
            id: 1,
            userName: "N C",
            description: "Aachi se VA he",
            date: "2023-02-22"
        },
        {
            id: 2,
            userName: "Dinesh Thakur",
            description: "An awesome place for having old age cataract surgeries.",
            date: "2023-02-17"
        },
        {
            id: 3,
            userName: "Anru Thakur",
            description: "Good services",
            date: "2023-02-15"
        },
        {
         id: 4,
         userName: "Anru Thakur",
         description: "Good services",
         date: "2023-02-15"
     },
     {
      id: 5,
      userName: "Anru Thakur",
      description: "Good services",
      date: "2023-02-15"
     },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="w-full px-8 my-20">
            <Slider {...settings}>
                {cardData.map((card) => (
                    <CardDesign key={card.id} data={card} />
                ))}
            </Slider>
        </div>
    );
};

export default Cards;
