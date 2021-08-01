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

    //creating collection with name students in myprojectdb database
    var collection =  db.collection('students');

    //creatiing student documents to be inserted
    var std1 = {name:'Zaid', standard: 10, subject:['Physics', 'Chemistry', 'Maths']};
    var std2 = {name:'Raid', standard: 11, subject:['Biology', 'Chemistry']};
    var std3 = {name:'Ayaz', standard: 12, subject:['Statics', 'Commerce', 'Maths']};

    //wait before connection closed
    //insert documents to students collection
    var result = await collection.insertMany([std1, std2, std3]);
    console.log(result);
    //close connection
    client.close();
}); 

