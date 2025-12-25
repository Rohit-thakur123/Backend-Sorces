const sumResult=(req, res)=>{
    const body=[];
    req.on("data", (chunks)=>{
        body.push(chunks);
    });
    req.on("end", ()=>{
        console.log("actual data in body form of chunks: ",body)
        console.log("inside req on end: "+req.url)
        const bodyStr=Buffer.concat(body).toString();
        console.log("body str: "+bodyStr);
        const params=new URLSearchParams(bodyStr);
        console.log("params: ",params);
        const bodyObj=Object.fromEntries(params);
        console.log("bodyobj: ",bodyObj);
        const result=Number(bodyObj.num1) + Number(bodyObj.num2)
        
        console.log(result); 
        res.setHeader("Content-Type", "text/html");
        res.write(`<html><body>
            <h1>Result: ${result}</h1>
            <a href="/calculator">Go Back</a>
        </body></html>`);
        res.end();     
    })    
}

exports.sumResult=sumResult;
