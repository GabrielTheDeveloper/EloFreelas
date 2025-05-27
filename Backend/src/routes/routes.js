const routes = require('express').Router();
const UserController = require('../controllers/AuthController.js');

routes.post('/register', UserController.registerUser);
routes.post('/login', UserController.loginUser);


module.exports = routes;