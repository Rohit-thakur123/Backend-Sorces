// first server in node js
const http=require('http');  //http ko require kar liya hai

const body=[];
const server=http.createServer((req, res)=>{  //http se server create
    req.on("data", (chunks)=>{
        body.push(chunks);
    });
    req.on("end", ()=>{
        const fullbody=Buffer.concat(body).toString();
        console.log(fullbody);
    })
    if(req.url==="/"){  //req ke url mai / ho to
        res.write('<html>')
        res.write('<head><title>first server</title></head>')
        res.write('<body><h1>hello from first server</h1></body>')
        res.write('</html>')
        return res.end();
    }
    else if(req.url==="/about"){
        res.write('<html>')
        res.write('<head><title>about page</title></head>')
        res.write('<body><h1>about page</h1></body>')   
        res.write('</html>')
        return res.end();
    }
    else{
        res.write('<html>')
        res.write('<head><title>404 page</title></head>')
        res.write('<body><h1>404 page not found</h1></body>')   
        res.write('</html>')
        return res.end();
    }
})
const PORT=3000;
server.listen(PORT, ()=>{  //listen bhi karvana padta hai
    console.log("your req on this server: "+PORT);
});

