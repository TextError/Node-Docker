const { PORT, MONGO_URL, REDIS_URL, REDIS_PORT, SESSION_SECRET } = require("./config/keys");
const express = require("express");
const mongoose = require("mongoose");
const redis = require('redis');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const redisClient = redis.createClient({ host: REDIS_URL, port: REDIS_PORT });

const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.enable('trust proxy');

app.use(session({
  store: new redisStore({ client: redisClient }),
  secret: SESSION_SECRET,
  cookie: {
    secure: false,
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    maxAge: 30000000
  },
}));
app.use(express.json());

const connect = () => {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("successfully connected to DB!"))
    .catch(e => {
      console.log(e);
      setTimeout(connect(), 5000)
    })
}

connect();

app.get('api/', (req, res) => {
  res.send("<h2>Hi there!</h2>")
});

app.use("/api/posts", postRouter);
app.use("api//users", userRouter);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));