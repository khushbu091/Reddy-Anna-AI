import React, { useState, useEffect } from "react";
import { useCards } from "../AdminPannel/CardContext";
import "../AdminPannel/CardForm.css";
const CardForm = ({ selectedCard, clearSelection }) => {
  const { cards, addCard, updateCard, deleteCard } = useCards();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    buttonText: "Play Now",
  });

  useEffect(() => {
    if (selectedCard) setFormData(selectedCard);
  }, [selectedCard]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({ ...formData, imageUrl: reader.result });
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedCard) {
      await fetch(`http://localhost:5000/cards/${selectedCard.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      updateCard(selectedCard.id, formData);
      clearSelection();
    } else {
      const response = await fetch("http://localhost:5000/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const newCard = await response.json();
        addCard(newCard);
      }
    }
    setFormData({ title: "", description: "", imageUrl: "", buttonText: "Play Now" });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="card-form">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">{selectedCard ? "Update Card" : "Add Card"}</button>
        {selectedCard && <button type="button" onClick={clearSelection}>Cancel</button>}
      </form>

      <div className="card-list">
        {cards.map((card) => (
          <div key={card.id} className="custom-card">
            <img src={card.imageUrl} alt={card.title} className="card-img" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button onClick={() => setFormData(card)}>Edit</button>
            <button onClick={() => deleteCard(card.id)}>Delete</button>
          </div>
        ))}
     
    </div>
    </>
  );
};

export default CardForm;
