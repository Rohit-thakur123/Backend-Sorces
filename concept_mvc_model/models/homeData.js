//make fake data base 
//modal ka use isliye karte hai ki separate jagaha par hum ek database or apne data ko handle kar le 

const registeredHomes=[];

module.exports=class HomeData{ 
  constructor(imageUrl, title, location, price){
    this.imageUrl=imageUrl; 
    this.title=title;
    this.location=location;
    this.price=price;
  }
  save(){
    registeredHomes.push(this);    
  }
  //here we use static bc i want to show data same to all 
  static fetchAll(){
    return registeredHomes;
  }
}