import React, { createContext, useContext, useState, useEffect } from "react";

const CardContext = createContext();

export const useCards = () => {
  return useContext(CardContext);
};

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cards")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error fetching cards:", err));
  }, []);

  const addCard = (card) => {
    setCards((prevCards) => [...prevCards, { ...card, id: Date.now().toString() }]);
  };

  const updateCard = (id, updatedCard) => {
    setCards((prevCards) => prevCards.map((card) => (card.id === id ? updatedCard : card)));
  };

  const deleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <CardContext.Provider value={{ cards, addCard, updateCard, deleteCard }}>
      {children}
    </CardContext.Provider>
  );
};
