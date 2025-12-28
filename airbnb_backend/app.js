
//require express 
const express = require('express');
//require routes
const userRouter=require("./routes/userRouter");
const hostRouter=require("./routes/hostRouter");

const app=express();

// app.use((req, res, next)=>{
//   console.log(req.url, req.method);
//   next();
// })

app.use(express.urlencoded({extended:true}));  // url encoded 

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next)=>{
  // res.send(`<h1>page not found 404 error</h1>`)
  res.status(404)
})

const PORT=3001;
app.listen(PORT, ()=>{
  console.log("server at http://localhost:3001");
});  