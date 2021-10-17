var express = require("express");
var cookieParser = require('cookie-parser');
var session = require("express-session");
var morgan = require("morgan"); //for the login part

var app =express();

app.use(morgan('dev'));
app.use(cookieParser());

app.use(session({secret:'secretKey',saveUninitialized:true,resave:true,cookie:{maxAge:60000}}));

app.get('/',function(req,res,next){
    if(req.session.views){
        req.session.views++;
        res.setHeader('Content-Type','text/html');
        res.write('<p>Views: '+ req.session.views+ '</p>');
        res.write('<p>Expires In : '+(req.session.cookie.maxAge / 1000)+'s</p>')
        res.end();
    }else{
        req.session.views=1;
        res.end("Refresh Page!")
    }
});
app.listen(1234,function(){
    console.log("Server Started..")
})