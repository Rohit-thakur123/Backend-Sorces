const fs=require('fs');
const path=require('path');
const rootDir=require('../utils/pathutils');

const favouriteDataFilePath=path.join(rootDir,'data','favouriteData.json');

module.exports=class FavouriteData{

  static addToFavourites(homeId, callback){
    this.getFavourites(favourites=>{
      if(favourites.includes(homeId)){
        console.log("home is already exist"); // Home already in favourites
      }else{
        favourites.push(homeId);
        fs.writeFile(favouriteDataFilePath, JSON.stringify(favourites),callback);
      }
    }); 
  }

  static getFavourites(callback){
    fs.readFile(favouriteDataFilePath,(err,fileContent)=>{
      callback(err ? [] : JSON.parse(fileContent));
    });
  }
} 
