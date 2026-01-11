const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController");

userRouter.get("/", userController.userHome);

userRouter.get("/bookings", userController.bookingHome);

userRouter.get("/favourite-list",userController.favouriteHome);

module.exports = userRouter;  
