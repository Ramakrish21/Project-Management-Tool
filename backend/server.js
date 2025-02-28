const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");
const projectRoutes = require("./src/routes/projectRoutes")

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors("http://localhost:5173/"));

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
