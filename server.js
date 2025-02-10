const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, "db.json");

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ sliders: [], cards: [] }, null, 2));
}

// ✅ Get Cards
app.get("/cards", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });
    res.json(JSON.parse(data).cards || []);
  });
});

// ✅ Add Card
app.post("/cards", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });

    const jsonData = JSON.parse(data);
    const newCard = {
      id: Date.now().toString(),
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl || "",
      buttonText: req.body.buttonText,
    };

    jsonData.cards.push(newCard);

    fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error writing file" });
      res.json(newCard);
    });
  });
});

// ✅ Update Card
app.put("/cards/:id", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });

    let jsonData = JSON.parse(data);
    jsonData.cards = jsonData.cards.map((card) =>
      card.id === req.params.id ? { ...card, ...req.body } : card
    );

    fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error writing file" });
      res.json({ message: "Card updated successfully!" });
    });
  });
});

// ✅ Delete Card
app.delete("/cards/:id", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });

    let jsonData = JSON.parse(data);
    jsonData.cards = jsonData.cards.filter((card) => card.id !== req.params.id);

    fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error writing file" });
      res.json({ message: "Card deleted successfully!" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
