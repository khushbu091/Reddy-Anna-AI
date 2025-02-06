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

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Preview image (if needed) or store the file URL
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl); // Store image for preview or uploading
        setFormData({ ...formData, imageUrl: imageUrl }); // Set the form data image URL (can be used in submission)
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
      setImage(null); // Reset the image after submitting
    };

    const handleEdit = (card) => {
      setFormData(card);
      setEditingId(card.id);
      setImage(card.imageUrl); // For editing, also show the current image
    };

    return (
      <div className="container">
      <div className="card-form-container">
        <h1 className="cart-title">Admin Panel - Manage Cards</h1>
        <form onSubmit={handleSubmit} className="admin-form">
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
          
          {/* File input for image upload */}
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
