const express = require("express");
const hostRouter = express.Router();
const hostController = require('../controller/hostController');

hostRouter.get('/add-home', hostController.getAddhome);
hostRouter.post('/add-home', hostController.postAddhome);
hostRouter.get('/host-home-list', hostController.hostHome); 
hostRouter.get('/edit-home/:homeId', hostController.getEditHome);

hostRouter.post('/edit-home', hostController.postEditHome);

hostRouter.post('/delete-home/:homeId', hostController.postDeleteHome);


// hostRouter.get('/favourite-list', hostController.getFavouriteList);
hostRouter.post('/delete-favourite/:homeId',hostController.postDeleteFavourite);

module.exports = hostRouter;
 