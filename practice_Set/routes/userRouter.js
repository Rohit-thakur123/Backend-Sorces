const express = require("express");
const userRouter = express.Router();
const homesController = require("../controller/homes");

userRouter.get("/", homesController.userHome);

module.exports = userRouter;
