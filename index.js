require('dotenv').config({ path: __dirname+'/config/config.env' });
const { PORT } = require("./config/keys");
const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send("<h2>Hi there!</h2>")
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));