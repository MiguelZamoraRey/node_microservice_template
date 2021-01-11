const express = require('express');

const ExampleController = require('../controllers/example');

const api = express.Router();
// var md_auth = require('../middlewares/authenticated');

api.get('/', ExampleController.hello);
// api.get('/', md_auth.ensureAuth, ExampleController.getWithMiddleware);

module.exports = api;
