const http=require("http");

const server=http.createServer((req, res)=>{
  if(req.url === "/"){
    res.write(`<html><body>
      <h1>hello brothe </h1>
      </body></html>`);
     return res.end();
  }else{
     res.write(`<html><body>
      <h1>page not found 404 </h1>
      </body></html>`);
      return res.end();
  }
});

const PORT=3000;
server.listen(PORT, ()=>{
  console.log(`your server at http://localhost:3000`);
})


