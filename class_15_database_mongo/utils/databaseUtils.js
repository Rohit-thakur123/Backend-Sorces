const mongo=require('mongodb');
const mongoClient=mongo.MongoClient;
const mongoURL="mongodb+srv://user:password_123@developer01.eiozdaa.mongodb.net/?appName=Developer01";

let _db;
const mongoConnect=(callback)=>{
  mongoClient.connect(mongoURL).then(client=>{
    _db=client.db('airbnb');
    callback();
  }).catch(err=>{
    console.log("hey there is an error",err);
  })
};

const getDb=()=>{
  if(!_db){
    throw new error('not connect database');
    
  }
  return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;
