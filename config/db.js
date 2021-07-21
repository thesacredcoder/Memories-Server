const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    throw new Error(err);
  });

mongoose.set("useFindAndModify", false);

module.exports = connection;
