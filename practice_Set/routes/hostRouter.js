const express=require("express");
const hostRouter=express.Router();  //make router 

const homesController=require('../controller/homes');

// get request handling for add-home form
hostRouter.get('/',homesController.getAddhome);

// post request handleing for add-home form is moved to successRouter.js
hostRouter.post('/',homesController.postAddhome);


module.exports=hostRouter;  //export router