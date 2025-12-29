// require path
const path=require('path');
// add html file 
const rootdir=require('../utils/pathutils');

const express=require('express');

const contactRouter=express.Router();

contactRouter.get('/',(req, res, next)=>{
  res.sendFile(path.join(rootdir, 'views', 'contact.html'));
})

module.exports=contactRouter;