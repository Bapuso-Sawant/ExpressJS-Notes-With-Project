var mongoose = require("mongoose");
var assert = require("assert");

var Tutorials = require("./schema.ts");

var url = "mongodb://localhost:27017/MyDb";

mongoose.connect(url);

var db = mongoose.connection;

db.on('error',console.error.bind(console,"Connection Error"));
db.on('open',function(){
    console.log("Connected successfully..")
})

var newTopic = Tutorials({
    topic:"Express.JS",
    description:"Learning Express"
});

newTopic.save(function(err){
    if(err) throw err;
    Tutorials.find({},function(err,data){
        if(err) throw err;
        console.log(data)
    })
})