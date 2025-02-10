import React, { createContext, useContext, useEffect, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const addCard = (card) => setCards([...cards, card]);
  const updateCard = (id, updatedCard) => setCards(cards.map((card) => (card.id === id ? updatedCard : card)));
  const deleteCard = async (id) => {
    await fetch(`http://localhost:5000/cards/${id}`, { method: "DELETE" });
    setCards(cards.filter((card) => card.id !== id));
  };

  return <CardContext.Provider value={{ cards, addCard, updateCard, deleteCard }}>{children}</CardContext.Provider>;
};

export const useCards = () => useContext(CardContext);
