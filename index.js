var MongoClient = require('mongodb').MongoClient, assert = require('assert');

//connection url here
var url = 'mongodb://localhost:27017';

//updated all of this
MongoClient.connect(url,async function(err, client) {

    //assert if error happen, or null
    assert.equal(null, err);
    //we have connection
    console.log('connected to mongodb server'); 

    //connect to database
    var db = client.db('myprojectdb')

    //use collection with name students in myprojectdb database
    var collection =  db.collection('students');

    //update subject and if we don't had subject create it
    // var result = await collection.updateOne({name:'Zaid'}, {$set: {subject: ['Science', 'Programming']}})
    // console.log(result);
    //creatiing student documents to be inserted
    // var std1 = {name:'Zaid', standard: 10, subject:['Physics', 'Chemistry', 'Maths']};
    // var std2 = {name:'Raid', standard: 11, subject:['Biology', 'Chemistry']};
    // var std3 = {name:'Ayaz', standard: 12, subject:['Statics', 'Commerce', 'Maths']};

    //wait before connection closed
    //insert documents to students collection
    // var result = await collection.insertMany([std3]);
    // console.log(result);
   
    //query to a collection
//    var result = await collection.find({name:'Zaid'});
//    var result = await collection.findOne({name:'Zaid'});
//    console.log(result);
   
//this is for delete
// var result = await collection.deleteOne({name:'Ayaz'});
// console.log(result);
   
   
   
    //close connection
    client.close();
}); 

