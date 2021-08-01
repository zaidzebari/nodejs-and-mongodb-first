var MongoClient = require('mongodb').MongoClient, assert = require('assert');

//connection url here
var url = 'mongodb://localhost:27017/myprojectdb';

MongoClient.connect(url, function(err, db) {
    //assert if error happen, or null
    assert.equal(null, err);
    //we have connection
    console.log('connected to mongodb server'); 
    //close connection
    db.close();
});