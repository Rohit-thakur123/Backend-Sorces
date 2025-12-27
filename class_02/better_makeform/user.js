//login form
const loginForm=`<html><body>

    <h2>Registration Form</h2>

    <form action="/submit-data" method="POST">

        <input type="text" name="username" placeholder="Enter Username" required>
        <br><br>

        <input type="email" name="email" placeholder="Enter Email" required>
        <br><br>

        Gender:<br>
        <input type="radio" name="gender" value="male"> Male<br>
        <input type="radio" name="gender" value="female"> Female<br>
        <input type="radio" name="gender" value="other"> Other<br><br>

        <button type="submit">Submit</button>

    </form>

</body></html>`

// import http from "http";
// import fs from "fs";
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {      
    if(req.url === "/"){        
        res.write(loginForm);
        return res.end();
    }else if(req.url.toLowerCase() === "/submit-data" && req.method === "POST"){
        const body=[]; //make an array for collect chunks
     req.on("data", (chunks)=>{  //chunks ke form main data aa raha hoga or body main push ho raha hai
        body.push(chunks);
    });
    req.on("end", ()=>{  //end main data buffer ki form maiun aata hai or use hum body se concat karte hai or string main convert karte hai
        const fullbody=Buffer.concat(body).toString();
        // console.log(fullbody);
        //convert into useful correct parse by urlsearch
        const param=new URLSearchParams(fullbody);
        /*const bodyObject={};
        for(const [key, val] of param.entries()){
            bodyObject[key]=val;
        }*/
       const bodyObject=Object.fromEntries(param);
    //    console.log(bodyObject)
    //write fileSync() ek synchronous method hai jo ki kehata hai ki saara kaam chodkar mera kaam pura karo menan ayeh ek acchi practice nii hai yeh event loop ko block kardata jhai jabtak yeh run nii hoga 
    //fs.writeFileSync("formdata.txt", JSON.stringify(bodyObject));

    // usse bachne ke liye writeFile() method hi sahi hai 
            fs.writeFile("formData.txt", JSON.stringify(bodyObject), (err)=>{
                console.log("successfully write");
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();        
            })
        });  
    }else{

        res.setHeader('Content-Type', 'text/html');   
        res.write(`<html><body>
            <h1>thankyou</h1>
            </body></html>`);
            
    }
});


server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
