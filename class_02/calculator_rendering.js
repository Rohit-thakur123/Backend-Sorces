const http=require('http');
const {handler}=require('./handler');
const server=http.createServer(handler);


const PORT=3003;
server.listen(PORT, ()=>{
    console.log(`server run on: http://localhost:${PORT}`);
})