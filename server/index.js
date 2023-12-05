const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const mongoDBAtlasUri =
  "mongodb+srv://kalekarprathamesh130:Prathamesh@cluster0.3xmdq1n.mongodb.net/Bank?retryWrites=true&w=majority";

mongoose.connect(mongoDBAtlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
