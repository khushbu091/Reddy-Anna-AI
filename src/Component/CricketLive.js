import React, { useEffect, useState } from "react";
import "../Styles/CricketLive.css";

const matches = [
    { league: "India. Jain Premier League", results: [
      { time: "FT 16:34", teams: "Main 11 vs Sarvodaya 11", score: "121 - 13" },
    ]},
    { league: "India. Ranji Trophy", results: [
      { time: "FT 09:30", teams: "Karnataka vs Haryana", score: "0 - 0" },
      { time: "FT 09:30", teams: "Railways vs Delhi", score: "0 - 0" },
    ]},
    { league: "World. Gold League", results: [
      { time: "FT 15:30", teams: "Bulls vs White Titans", score: "150/1 (12) - 152" },
      { time: "FT 15:00", teams: "Rangers vs Hawksbills", score: "148/1 (12) - 137/3 (1)" },
      { time: "FT 14:00", teams: "Red Kings vs White Titans", score: "149 - 147/1 (12)" },
      { time: "FT 14:00", teams: "Red Kings vs White Titans", score: "149 - 147/1 (12)" },
      { time: "FT 14:00", teams: "Red Kings vs White Titans", score: "149 - 147/1 (12)" },
      { time: "FT 14:00", teams: "Red Kings vs White Titans", score: "149 - 147/1 (12)" },
      { time: "FT 14:00", teams: "Red Kings vs White Titans", score: "149 - 147/1 (12)" },


    ]},
  ];

const CricketLiveScores = () => {
    return(
        <>
        <div className="container">
        <div className="Crickrt-live-container">
        <div className="scoreboard">
        {matches.map((match, index) => (
          <div key={index} className="league-section">
            <h2 className="league-title">{match.league}</h2>
            {match.results.map((game, i) => (
              <div key={i} className="match-result">
                <span className="match-time">{game.time}</span>
                <span className="match-teams">{game.teams}</span>
                <span className="match-score">{game.score}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>
        
        </>
    );
  };
  
  export default CricketLiveScores;
  
