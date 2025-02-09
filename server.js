// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");
// const multer = require("multer");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.static("public"));

// const DATA_FILE = path.join(__dirname, "public", "db.json");

// if (!fs.existsSync(DATA_FILE)) {
//   fs.writeFileSync(DATA_FILE, JSON.stringify({ sliders: [], cards: [] }, null, 2));
// }

// const storage = multer.diskStorage({
//   destination: "public/uploads/",
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// app.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded" });
//   }
//   const imageUrl = `uploads/${req.file.filename}`; 
//   res.json({ imageUrl });
// });

// app.get("/getSlides", (req, res) => {
//   fs.readFile(DATA_FILE, "utf8", (err, data) => {
//     if (err) return res.status(500).json({ error: "Error reading file" });
//     res.json(JSON.parse(data).sliders || []);
//   });
// });

// app.post("/updateSlides", (req, res) => {
//   fs.readFile(DATA_FILE, "utf8", (err, data) => {
//     if (err) return res.status(500).json({ error: "Error reading file" });
//     const jsonData = JSON.parse(data);
//     jsonData.sliders = req.body;
//     fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
//       if (err) return res.status(500).json({ error: "Error writing file" });
//       res.json({ message: "Slides updated successfully!" });
//     });
//   });
// });

// app.get("/cards", (req, res) => {
//   fs.readFile(DATA_FILE, "utf8", (err, data) => {
//     if (err) return res.status(500).json({ error: "Error reading file" });
//     res.json(JSON.parse(data).cards || []);
//   });
// });

// app.post("/cards", (req, res) => {
//   fs.readFile(DATA_FILE, "utf8", (err, data) => {
//     if (err) return res.status(500).json({ error: "Error reading file" });
//     const jsonData = JSON.parse(data);
//     const newCard = {
//       id: Date.now(),
//       title: req.body.title,
//       description: req.body.description,
//       imageUrl: req.body.imageUrl || "",
//       buttonText: req.body.buttonText,
//     };
//     jsonData.cards.push(newCard);
//     fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
//       if (err) return res.status(500).json({ error: "Error writing file" });
//       res.json(newCard);
//     });
//   });
// });

// app.put("/cards/:id", (req, res) => {
//   fs.readFile(DATA_FILE, "utf8", (err, data) => {
//     if (err) return res.status(500).json({ error: "Error reading file" });
//     let jsonData = JSON.parse(data);
//     jsonData.cards = jsonData.cards.map((card) =>
//       card.id == req.params.id ? { ...card, ...req.body } : card
//     );
//     fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
//       if (err) return res.status(500).json({ error: "Error writing file" });
//       res.json({ message: "Card updated successfully!" });
//     });
//   });
// });

// app.delete("/cards/:id", (req, res) => {
//   fs.readFile(DATA_FILE, "utf8", (err, data) => {
//     if (err) return res.status(500).json({ error: "Error reading file" });
//     let jsonData = JSON.parse(data);
//     jsonData.cards = jsonData.cards.filter((card) => card.id != req.params.id);
//     fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
//       if (err) return res.status(500).json({ error: "Error writing file" });
//       res.json({ message: "Card deleted successfully!" });
//     });
//   });
// });

// app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });



const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const DATA_FILE = path.join(__dirname, "public", "db.json");

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ sliders: [], cards: [] }, null, 2));
}

// ✅ Fix: Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "public/uploads/";
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// ✅ **Fix: Upload Image API**
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const imageUrl = `/uploads/${req.file.filename}`; // **Fixed URL**
  res.json({ imageUrl });
});

// ✅ **Serve Uploaded Images**
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
