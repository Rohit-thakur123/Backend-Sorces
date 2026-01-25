// require express
const express = require('express');

// require routes
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

// error controller
const { pagenotfound } = require('./controller/errors');

const path = require('path');  
const rootdir = require('./utils/pathutils');
const {mongoConnect} = require('./utils/databaseUtils');

const app = express();

// EJS setup
app.set('view engine', 'ejs');
app.set('views', 'views');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootdir, 'public')));

// routes
app.use('/', userRouter);
app.use('/host', hostRouter);   // ✅ ONLY ONE TIME
 
// 404 page
app.use(pagenotfound);

// server
const PORT = 3001;
mongoConnect((client) => {
  console.log(client);
  app.listen(PORT, () => {
    console.log("server at http://localhost:3001");
  }); 
})
