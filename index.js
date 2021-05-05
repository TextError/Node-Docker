const { PORT, USER, PASSWORD } = require("./config/keys");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(`mongodb://${USER}:${PASSWORD}@mongo:27017/?authSource=admin"`)
  .then(() => console.log("successfully connected to DB!"))
  .catch(e => console.log(e))

app.get('/', (req, res) => {
  res.send("<h2>Hi there!</h2>")
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));