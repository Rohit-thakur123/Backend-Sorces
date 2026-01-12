// homes se related controller functions yaha honge

const FavouriteData = require("../models/favouriteData");
const HomeData = require("../models/homeData");

exports.userHome=(req, res, next) => {
    HomeData.fetchAll(registeredHomes=>{
      res.render("store/home-list", { registeredHomes: registeredHomes, pageTitle: "Home Page" }); 
    });
    
} 
  
exports.bookingHome=(req, res, next) => {
    res.render("store/booking", {pageTitle: "Your Bookings" }); 
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId; 
  HomeData.findById(homeId, homedetails=>{
    if (!homedetails) {
      res.redirect('/');
      return;
    }
    console.log("home details", homedetails);
    res.render("store/home-details", {pageTitle: "Home Details", home: homedetails });
  })
 
}; 

exports.favouriteHome=(req, res, next) => {
    FavouriteData.getFavourites(favouriteHomes=>{
      HomeData.fetchAll(registeredHomes=>{
        const favouriteHome=registeredHomes.filter(home=>
          favouriteHomes.includes(home.id)
        );
        console.log("favourite homes", favouriteHome);
      res.render("store/favourite-list", { favouriteHomes: favouriteHome, pageTitle: "Your Favourites" }); 
    });
    });
} 

exports.postAddToFavourites = (req, res, next) => {
  const homeId = req.params.homeId; 
  // Logic to add the home to favourites would go here
  console.log("Adding home to favourites:", homeId);
  FavouriteData.addToFavourites(homeId, (err) => {
    if (err) {
      console.error("Error adding to favourites:", err);
    }
    res.redirect('/favourite-list');
  });  
} 
