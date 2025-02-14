import { useState, useEffect } from "react";
import axios from "axios";
import "../AdminPannel/SliderForm.css";

const SliderForm = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/sliders");
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); 
    }
  };

  const addImage = async () => {
    if (!selectedFile) {
      alert("Please select an image!");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      const imageObj = { id: Date.now(), image: reader.result };

      try {
        const response = await axios.post("http://localhost:5000/sliders", imageObj);
        console.log("Image Added:", response.data);
        setSelectedFile(null);
        setPreview("");
        fetchImages();
      } catch (error) {
        console.error("Error adding image:", error);
      }
    };

    reader.onerror = () => {
      console.error("Error reading file");
    };
  };

  const deleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/sliders/${id}`);
      fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Slider Form</h2>

      <input type="file" accept="image/*" onChange={handleFileChange} className="slider-input" />
      {preview && <img src={preview} alt="Preview" className="preview-image" />}
      <button onClick={addImage} className="slider-button add-button">Add Image</button>

      <ul className="slider-list">
        {images.map((image) => (
          <li key={image.id} className="slider-item">
            <img src={image.image} alt="Slider" className="slider-image" />
            <button onClick={() => deleteImage(image.id)} className="slider-button delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderForm;
