const PORT = process.env.PORT || 3000;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const MONGO_IP = process.env.MONGO_IP || "mongo";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = `mongodb://${USER}:${PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin"`;
const REDIS_URL = process.env.REDIS_URL || 'redis';
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const SESSION_SECRET = process.env.SESSION_SECRET;

module.exports = { PORT, USER, PASSWORD, MONGO_IP, MONGO_PORT, MONGO_URL, REDIS_URL, REDIS_PORT, SESSION_SECRET };