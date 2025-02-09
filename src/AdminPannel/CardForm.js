import React, { useState } from "react";
import "../AdminPannel/CardForm.css";
import { useCards } from "../AdminPannel/CardContext";

const CardForm = () => {
    const { cards, addCard, updateCard, deleteCard } = useCards();
    const [formData, setFormData] = useState({ title: "", description: "", imageUrl: "", buttonText: "" });
    const [editingId, setEditingId] = useState(null);
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        const imgData = new FormData();
        imgData.append("image", file);

        try {
          const response = await fetch("http://localhost:5000/upload", {
            method: "POST",
            body: imgData,
          });

          const data = await response.json();
          console.log("Upload Response:", data); // ✅ Debugging

          if (data.imageUrl) {
            setFormData({ ...formData, imageUrl: data.imageUrl });
            setImage(data.imageUrl);
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (editingId !== null) {
        updateCard(editingId, { id: editingId, ...formData });
        setEditingId(null);
      } else {
        addCard(formData);
      }
      setFormData({ title: "", description: "", imageUrl: "", buttonText: "" });
      setImage(null);
    };

    const handleEdit = (card) => {
      setFormData(card);
      setEditingId(card.id);
      setImage(card.imageUrl);
    };

    return (
      <div className="container">
      <div className="card-form-container">
        <h1 className="cart-title">Admin Panel - Manage Cards</h1>
        <form onSubmit={handleSubmit} className="admin-form">
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
          
          <input type="file" onChange={handleImageChange} accept="image/*" />
          {image && <img src={image} alt="Preview" style={{ width: 100, height: 100, objectFit: "cover" }} />}
          
          <input name="buttonText" value={formData.buttonText} onChange={handleChange} placeholder="Button Text" required />
          <button type="submit">{editingId ? "Update Card" : "Add Card"}</button>
        </form>

        <div className="card-list">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.imageUrl} alt="Card" />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <button onClick={() => handleEdit(card)}>Edit</button>
              <button onClick={() => deleteCard(card.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
};

export default CardForm;
