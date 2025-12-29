// require patrh
const path=require('path');
// add rootdir html join page
const rootdir=require('../utils/pathutils');

const express=require('express');
const joinRouter=express.Router();

joinRouter.get('/',(req, res, next)=>{
  res.sendFile(path.join(rootdir, 'views', 'join.html'));
})

module.exports=joinRouter;