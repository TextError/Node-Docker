const express = require('express');
const Auth = require('../controllers/AuthController');

const Router = express.Router();

Router.route('signup', Auth.signUp)
Router.route('login', Auth.login)

module.exports = Router;