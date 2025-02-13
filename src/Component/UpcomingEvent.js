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
                <img src={card.imageUrl} alt={card.title} className="card-img" />
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
