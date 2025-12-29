const path=require('path');
const rootdir=require('../utils/pathutils');
const express=require("express");

const hostRouter=express.Router();  //make router 

hostRouter.get('/',(req, res, next)=>{
  res.sendFile(path.join(rootdir, 'views', 'add-home.html'));
});


hostRouter.post("/host/add-home",(req, res, next)=>{
  console.log(req.body);
  res.send(`<p> your home name ${req.body.name} and address ${req.body.address}
    <a href="/"> go back</a>`);
});

module.exports=hostRouter;