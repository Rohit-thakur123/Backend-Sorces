// const path = require("path");
const express = require("express");

// const rootdir = require("../utils/pathutils");
const { registeredHomes } = require("./hostRouter");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    console.log(registeredHomes);
    // res.sendFile(path.join(rootdir, "views", "homePage.html")); not work bc of ejs
    res.render("homePage", { registeredHomes: registeredHomes });
});

module.exports = userRouter;
