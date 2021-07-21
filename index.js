const express = require("express");
const cors = require("cors");

const connection = require("./config/db");
const postRoutes = require("./routes/posts");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 3001;

connection.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});
