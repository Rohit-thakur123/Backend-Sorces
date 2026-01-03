// homes se related controller functions yaha honge

exports.getAddhome=(req, res, next)=>{
  // res.sendFile(path.join(rootdir,'views','addHome.html'));
  res.render('add-home',{pageTitle:'Add Home'});
  
}
const registeredHomes=[];

exports.postAddhome=(req, res, next)=>{
  registeredHomes.push({
    imageUrl:req.body.imageUrl,
    title:req.body.title,
    location:req.body.location,
    price:req.body.price
  });
  // console.log(registeredHomes);
   res.render('success',{pageTitle:'Success'});
}

exports.userHome=(req, res, next) => {
    console.log(registeredHomes);
    // res.sendFile(path.join(rootdir, "views", "homePage.html")); not work bc of ejs
    res.render("homePage", { registeredHomes: registeredHomes, pageTitle: "Home Page" });
    //partials ke liye pageTitle bhejna hoga 

}
