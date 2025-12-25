const http=require('http');

const navbar=`<nav>
            <a href="/">Home</a> |
            <a href="/about">About</a> |
            <a href="/contact">Contact</a>            
        </nav>
        <hr>`;

const server=http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write("<html><body>");
        res.write(navbar);
        res.write("<p>welcome to home</p>")
        res.write("</body></html>");
        return res.end();
    }else if(req.url==='/about'){
        res.write("<html><body>");
        res.write(navbar);
        res.write("<p>welcome to About</p>")
        res.write("</body></html>");        
        return res.end();
    }else if(req.url==='/contact'){
        res.write("<html><body>");
        res.write(navbar);
        res.write("<p>welcome to contact</p>")
        res.write("</body></html>");        
        return res.end();
    }else{
        res.write("<html><body>");
        // res.write(navbar);
        res.write("<p>page not found</p>")
        res.write("</body></html>");        
        return res.end();
    }
})

const PORT=3001;
server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})