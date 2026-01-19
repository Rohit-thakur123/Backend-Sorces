const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController");

userRouter.get("/", userController.userHome);

userRouter.get("/bookings", userController.bookingHome);

userRouter.get("/favourite-list",userController.favouriteHome);

userRouter.post('/favourite-list/:homeId', userController.postAddToFavourites);

userRouter.get('/homes/:homeId', userController.getHomeDetails); //this is the dynamin path format :homeId 

module.exports = userRouter;  
