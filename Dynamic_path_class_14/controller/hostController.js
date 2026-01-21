// homes se related controller functions yaha honge

const FavouriteData = require("../models/FavouriteData");
const HomeData = require("../models/homeData");
//before call back function 
exports.getAddhome=(req, res, next)=>{
  // res.sendFile(path.join(rootdir,'views','addHome.html'));
  // res.render('host/add-home',{pageTitle:'Add Home'});
  // pahale yeh add home hi tha lekin baad main renbname kiya or edit home kar diya
  // res.render('host/addhome',{pageTitle:'Add Home'});
  res.render('host/edit-home',{pageTitle:'Add Home', editing:false});
  
}      
exports.postAddhome=(req, res, next)=>{
  //yaha par destructuring kar diya hai 
  const {imageUrl, title, location, price}=req.body;
  //yaha par class ko call kar liya hai 
  const home=new HomeData(imageUrl, title, location, price);
  //jitna bvhi data hai sara sava 
  home.save();
  res.redirect('/host/host-home-list');
}


exports.hostHome = (req, res, next) => {
  HomeData.fetchAll(registeredHomes => {
    res.render("host/host-home-list", {
      registeredHomes,
      pageTitle: "Host Home Page"
    });
  });
};

exports.getEditHome=(req, res, next)=>{
  // query parameters ko access karne ke liye req.query ka use karte hain or waha se editing parameter ko lete hain
  const editing=req.query.editing === 'true';
  // req.params se dynamic parameter ko access karte hain
  const homeId = req.params.homeId;
  // home id dekar HomeData se home ko fetch karte hain
  HomeData.findById(homeId, home => {
    if (!home) {
      return res.redirect('/host/host-home-list');
    } 
    
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Home",
      editing: editing,
      homeId: homeId
    });
  });
};

exports.postEditHome=(req, res, next)=>{
  const {homeId, imageUrl, title, location, price}=req.body;
  const updatedHome=new HomeData(imageUrl, title, location, price);
  updatedHome.id=homeId;
  updatedHome.save();
  res.redirect('/host/host-home-list');
} 
//method to delete home
exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  HomeData.deleteById(homeId, error=>{
    if (error) {
      console.log("Error deleting home: ", error);
    }
    res.redirect('/host/host-home-list');
  });
};

