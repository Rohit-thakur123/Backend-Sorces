const form=`<form action="/submit" method="post">
              <input type="text" placeholder="enter name" name=Uname>
              <input type="text" placeholder="enter email" name=Sname>
              <button>submit</button>
          </form>`

const express=require('express'); //import expressmodule

//import {body-parser} for parsing request issee hum post ke andar se detail nikal sakte hai by using {bodyParser.urlencoded()} method 
const bodyParser=require('body-parser')

const practice=express(); //make server with express inbuilt

practice.use(bodyParser.urlencoded());  //by using this method url ko encode kar lete hai jo data hum post form main bhej te hai 

practice.get("/", (req, res, next)=>{
  res.send(`<a href="/intro">intro page</a>
    <a href="/contact">contact us</a>`);
})

practice.get("/intro", (req, res, next)=>{
  res.send(`<h1>Welcome to the intro page</h1>`)
})

practice.get("/contact", (req, res, next)=>{
  console.log("i am contact")
  res.send(`<h1>Welcome to the contact page</h1>
    ${form}`);
})

practice.post("/submit", (req, res, next)=>{
  console.log("i am post", req.url, req.method, req.body);
  res.send(`<h1> Thankyou for visit</h1>
    <a href="/">Go Back</a>`);
})

const PORT=3001;
practice.listen(PORT, ()=>{
  console.log(`server start at: http://localhost:${PORT}`);
});