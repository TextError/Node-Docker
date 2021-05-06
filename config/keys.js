const PORT = process.env.PORT || 3000;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const MONGO_IP = process.env.MONGO_IP || "mongo";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = `mongodb://${USER}:${PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin"`

module.exports = { PORT, USER, PASSWORD, MONGO_IP, MONGO_PORT, MONGO_URL };