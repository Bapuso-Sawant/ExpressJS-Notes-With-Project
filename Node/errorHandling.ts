var express = require("express");
var app = express();

app.get('/',function(req,res){
    var err = new Error("Something went Wrong..");
    app.next(err);
})
app.use(function(err,req,res,next){
    res.status(500);
    res.send("OOPS something went wrong..")
});

app.listen(3000)
