const { PORT, MONGO_URL } = require("./config/keys");
const express = require("express");
const mongoose = require("mongoose");
const postRouter = require('./routes/postRoutes');

const app = express();

const connect = () => {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("successfully connected to DB!"))
    .catch(e => {
      console.log(e);
      setTimeout(connect(), 5000)
    })
}

connect();

app.get('/', (req, res) => {
  res.send("<h2>Hi there!</h2>")
});

app.use("/posts", postRouter);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));