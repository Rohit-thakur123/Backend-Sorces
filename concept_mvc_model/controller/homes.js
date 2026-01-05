// homes se related controller functions yaha honge

const HomeData = require("../models/homeData");
//before call back function 
exports.getAddhome=(req, res, next)=>{
  // res.sendFile(path.join(rootdir,'views','addHome.html'));
  res.render('add-home',{pageTitle:'Add Home'});
  
}





exports.postAddhome=(req, res, next)=>{
  //yaha par destructuring kar diya hai 
  const {imageUrl, title, location, price}=req.body;
  //yaha par class ko call kar liya hai 
  const home=new HomeData(imageUrl, title, location, price);
  //jitna bvhi data hai sara sava 
  home.save();
  console.log(imageUrl, title, location, price);
   res.render('success',{pageTitle:'Success'});
}

//work before call back added
/*exports.userHome=(req, res, next) => {
    const registeredHomes=HomeData.fetchAll();
    // res.sendFile(path.join(rootdir, "views", "homePage.html")); not work bc of ejs
    res.render("homePage", { registeredHomes: registeredHomes, pageTitle: "Home Page" }); 
    //partials ke liye pageTitle bhejna hoga 

}*/

// after call back added
exports.userHome=(req, res, next) => {
    HomeData.fetchAll(registeredHomes=>{
      res.render("homePage", { registeredHomes: registeredHomes, pageTitle: "Home Page" }); 
    });
    
}

