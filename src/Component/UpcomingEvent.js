// // import React, { useEffect, useState } from "react";
// import "../Styles/CricketLive.css";
// import banner from "../Image/up2.avif";
// import crd1 from "../Image/c1.jpg";
// import crd2 from "../Image/c2.jpg";
// import crd3 from "../Image/c3.jpg";
// import crd4 from "../Image/c4.jpg";


// const cards = [
//   {
//     title: "Super Cool Clay",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: crd1,
//     bgColor: "#111",
//     btnColor: "#ffd700"
//   },
//   {
//     title: "Fun With Clay",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: crd2,
//     bgColor: "#111",
//     btnColor: "#ffd700"
//   },
//   {
//     title: "Type of Clay",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: crd3,
//     bgColor: "#111",
//     btnColor: "#ffd700"
//   },
//   {
//     title: "Super Cool Clay",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: crd1,
//     bgColor: "#111",
//     btnColor: "#ffd700"
//   },
//   {
//     title: "Fun With Clay",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: crd2,
//     bgColor: "#111",
//     btnColor: "#ffd700"
//   },
//   {
//     title: "Type of Clay",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: crd3,
//     bgColor: "#111",
//     btnColor: "#ffd700"
//   }
// ];

// const UpcomingEvent = () => {
//     return(
//         <>
//         <div className="container">
//           <div className="banner-container">
//             <img src={banner} alt="Banner" className="banner-image" />
//             <div className="banner-content">
//             <h2 className="banner-title">Explore a World of Clay</h2>
//             <button className="banner-button">Take a Look</button>
//           </div>
//           </div>

//       <div className="upcoming-cards-container">
//       {cards.map((card, index) => (
//         <div className="upcoming-card" key={index} style={{ backgroundColor: card.bgColor }}>
//           <img src={card.image} alt={card.title} className="upcoming-card-image" />
//           <div className="upcoming-card-content">
//             <h3 className="upcoming-card-title">{card.title}</h3>
//             <p className="upcoming-card-description">{card.description}</p>
//             <button className="upcoming-card-button" style={{ backgroundColor: card.btnColor }}>
//               Let’s Go
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//         </div>
        
//         </>
//     );
//   };
  
//   export default UpcomingEvent;
  
import React from "react";
import { useCards } from "../AdminPannel/CardContext";
import "../Styles/UpcomingEvent.css";

const UpcomingEvent = () => {
  const { cards } = useCards();

  return (
    <div className="container">
    <div className="user-dashboard">
      <h1 className="home-title">User Dashboard</h1>
      <div className="card-container">
        {cards.map((card) => (
          <div key={card.id} className="custom-card">
            <div className="card-image">
              <img src={card.imageUrl} alt="Card" />
            </div>
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
              <button className="card-button">{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default UpcomingEvent;

