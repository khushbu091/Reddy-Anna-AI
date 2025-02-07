const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve static files

const DATA_FILE = path.join(__dirname, "public", "db.json");

// API to get slider images
app.get("/getSlides", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading file" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// API to update slider images
app.post("/updateSlides", (req, res) => {
  fs.writeFile(DATA_FILE, JSON.stringify(req.body, null, 2), (err) => {
    if (err) {
      res.status(500).json({ error: "Error writing file" });
    } else {
      res.json({ message: "Slides updated successfully!" });
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
