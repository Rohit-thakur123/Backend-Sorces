const loginForm=`<form action="/host/add-home" method="POST">
        <!-- Name -->
        <label>Name:</label><br>
        <input type="text" name="name" placeholder="Enter your name" required>
        <br><br>

        <!-- Address -->
        <label>Address:</label><br>
        <textarea name="address" placeholder="Enter your address" rows="4" cols="30" required></textarea>
        <br><br>

        <button type="submit">Submit</button>
    </form>`;
const express=require("express");

const hostRouter=express.Router();  //make router 

hostRouter.get("/host/add-home",(req, res, next)=>{
  res.send(`
    <h1>register home here</h1>
    ${loginForm}`);
});


hostRouter.post("/host/add-home",(req, res, next)=>{
  console.log(req.body);
  res.send(`<p> your home name ${req.body.name} and address ${req.body.address}
    <a href="/"> go back</a>`);
});

module.exports=hostRouter;