const { getDb } = require("../utils/databaseUtils");

module.exports=class HomeData{ 
  constructor(imageUrl, title, location, price){
    this.imageUrl=imageUrl; 
    this.title=title;
    this.location=location;
    this.price=price;
  }  
  save(){   
   const db=getDb();
   return db.collection('homes ').insertOne(this).then(result=>{
      console.log("home added");
   }).catch(err=>{
      console.log("error in adding home", err);
   });
  }

  static fetchAll(){//write code here for fetching all homes from database
    const db=getDb();
    return db.collection('homes').find().toArray();    
  }   

  //new method for getting single home by id
  static findById(id){
    const db=getDb();
    return db.collection('homes').findOne({_id:id});
  }

  //method to delete home by id
  static deleteById(id){
    const db=getDb();
    return db.collection('homes').deleteOne({_id:id});
  }
}