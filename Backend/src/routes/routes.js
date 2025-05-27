const routes = require('express').Router();
const AuthController = require('../controller/AuthController.js');

routes.post('/register', AuthController.registerUser);
routes.post('/login', AuthController.loginUser);


module.exports = routes;