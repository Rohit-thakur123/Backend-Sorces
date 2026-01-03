const path=require('path');
const rootdir=require('../utils/pathutils');
const express=require("express");

const hostRouter=express.Router();  //make router 

hostRouter.get('/',(req, res, next)=>{
  // res.sendFile(path.join(rootdir,'views','addHome.html'));
  res.render('add-home',{pageTitle:'Add Home'});
  
});
const registeredHomes=[];
// post request handleing for add-home form is moved to successRouter.js
hostRouter.post('/',(req, res, next)=>{
  registeredHomes.push({
    imageUrl:req.body.imageUrl,
    title:req.body.title,
    location:req.body.location,
    price:req.body.price
  });
  // console.log(registeredHomes);
   res.render('success',{pageTitle:'Success'});
});


module.exports={hostRouter, registeredHomes};