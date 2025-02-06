import React, { createContext, useContext, useState, useEffect } from "react";

const CardContext = createContext();

export const useCards = () => useContext(CardContext);

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : [];
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const addCard = (card) => setCards([...cards, { id: Date.now(), ...card }]);
  
  const updateCard = (id, updatedCard) => {
    setCards(cards.map((card) => (card.id === id ? updatedCard : card)));
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <CardContext.Provider value={{ cards, addCard, updateCard, deleteCard }}>
      {children}
    </CardContext.Provider>
  );
};
