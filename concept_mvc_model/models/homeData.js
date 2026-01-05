//make fake data base 
//modal ka use isliye karte hai ki separate jagaha par hum ek database or apne data ko handle kar le 

// here i want to write data inside the file 
const fs=require('fs');
const path=require('path');
const rootdir=require('../utils/pathutils');
//registered homes are push here
let registeredHomes=[];

module.exports=class HomeData{ 
  constructor(imageUrl, title, location, price){
    this.imageUrl=imageUrl; 
    this.title=title;
    this.location=location;
    this.price=price;
  }
  // before call back
  /*save(){
    registeredHomes.push(this);    
    //inner line i mention for the file writing 

    const homeDataPath=path.join(rootdir, 'data', 'homes.json');
    fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error=>{
      console.log("all changes conclude: ", error);
    });
  }*/

    //after call back function by using call back pahale data padhenge agar koi home json file main hua to use dikha denge or saath main naya home bhi add kar denge
  save(){
    HomeData.fetchAll((registeredHomes)=>{
      registeredHomes.push(this);   
      const homeDataPath=path.join(rootdir, 'data', 'homes.json');
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error=>{
        console.log("all changes conclude: ", error);
      });
    })
    
  }

  //here we use static bc i want to show data same to all 
  // idhar fetch all work nii karegi kyoki fetch all ke andar readfile ek andar async code hai jo ki  undefine de dega fetch all koi bhio value return nii kar payega

  /*static fetchAll(){
    // here i want to read data from the data file  
    const homeDataPath=path.join(rootdir, 'data', 'homes.json');
    fs.readFile(homeDataPath, (err, data)=>{
      console.log("file read: ",err, data);
      if(!err){
        registeredHomes= JSON.parse(data);
      }
      return registeredHomes;
    })
  }*/

    //idhar hum call back dedenge 
  static fetchAll(callback){
    // here i want to read data from the data file  
    const homeDataPath=path.join(rootdir, 'data', 'homes.json');
    fs.readFile(homeDataPath, (err, data)=>{
      console.log("file read: ",err, data);
      callback(!err ? JSON.parse(data) : []);
    })
  }
}