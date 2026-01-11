const express = require("express");
const hostRouter = express.Router();
const hostController = require('../controller/hostController');

hostRouter.get('/add-home', hostController.getAddhome);
hostRouter.post('/add-home', hostController.postAddhome);
hostRouter.get('/host-home-list', hostController.hostHome);

module.exports = hostRouter;
 