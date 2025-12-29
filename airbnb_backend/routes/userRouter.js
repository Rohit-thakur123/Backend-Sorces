const path = require("path");
const express = require("express");

const rootdir = require("../utils/pathutils");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.sendFile(path.join(rootdir, "views", "homePage.html"));
});

module.exports = userRouter;
