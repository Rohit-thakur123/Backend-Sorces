const { sumResult } = require("./sumResult");

const handler=(req, res)=>{
    if(req.url === "/"){
        console.log(req.url, req.method);
        res.setHeader("Content-Type", "text/html");
        res.write(`<html><body>
            <h1>Welcome to the Calculator</h1>
            <a href="/calculator">Go to Calculator</a>
            </body></html>`);
        return res.end();
    }
    else if(req.url.toLowerCase() === "/calculator" && req.method === "GET"){
        res.setHeader("Content-Type", "text/html");
        res.write(`<html><body>
            <h1>Calculator</h1>
            <form action="/calculate-result" method="POST">
                <input type="number" name="num1" placeholder="Enter first number">
                <input type="number" name="num2" placeholder="Enter second number">
                <button type="submit">Calculate</button>
            </form>
            </body></html>`);
            console.log("inside elif: "+req.url)
        return res.end();
    }else if(req.url.toLowerCase() === "/calculate-result" && req.method==="POST"){
        console.log("inside cal res: "+req.url);
       return sumResult(req, res);
       
    }
    console.log(req.url);
    res.setHeader("Content-Type", "text/html");
    res.write(`<html><body>
        <h1>page not found error</h1>
        </body></html>`);
    return res.end();
}

exports.handler=handler;