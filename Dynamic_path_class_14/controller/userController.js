// homes se related controller functions yaha honge

const HomeData = require("../models/homeData");

exports.userHome=(req, res, next) => {
    HomeData.fetchAll(registeredHomes=>{
      res.render("store/home-list", { registeredHomes: registeredHomes, pageTitle: "Home Page" }); 
    });
    
} 
  
exports.bookingHome=(req, res, next) => {
    res.render("store/booking", {pageTitle: "Your Bookings" }); 
}

exports.favouriteHome=(req, res, next) => {
    HomeData.fetchAll(registeredHomes=>{
      res.render("store/favourite-list", { registeredHomes: registeredHomes, pageTitle: "favourite" }); 
    });    
} 