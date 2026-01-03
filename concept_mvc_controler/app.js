
//require express 
const express = require('express');
//require routes
const userRouter=require("./routes/userRouter");
const hostRouter=require("./routes/hostRouter");
// const {successRouter}=require("./routes/successRouter");
const {pagenotfound}=require('./controller/errors');

const app=express();
// for working with dynamic ui by using ejs
app.set('view engine', 'ejs'); //set view engine
app.set('views', 'views'); //set views folder

const path=require('path');

const rootdir=require('./utils/pathutils');
// app.use((req, res, next)=>{
//   console.log(req.url, req.method);
//   next();
// })

// public folder ke andar jo files hoti hain (HTML, CSS, JS, images) unko direct browser me access karne ke liye.
app.use(express.static(path.join(rootdir, 'public')));  

app.use(express.urlencoded({extended:true}));  // url encoded 

app.use('/',userRouter);
// app.use('/success',successRouter);
app.use('/add-home',hostRouter);

app.use(pagenotfound);

const PORT=3001;
app.listen(PORT, ()=>{
  console.log("server at http://localhost:3001");
});  