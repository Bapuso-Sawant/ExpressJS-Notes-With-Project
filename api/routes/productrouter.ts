var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Products = require('../models/schema.ts');

var productRouter = express.Router();
 
productRouter.use(bodyParser.json);

//For all records
productRouter.route('/')
.get(function(req,res){
    Products.find({},function(err,product){
        if(err) throw err;
        res.json(product);
    });
})
.post(function(req,res){
    Products.create(req.body/**parsed by body parser in json */,function(err,product){
        if(err) throw err;

        console.log("Product added");
        res.writeHead(200,{'Content-Type':'text/plain'});
        var id = product._id;
        res.end("Added Product:"+id);
    });
})
.delete(function(req,res,next){
    Products.remove({},function(err,resp){
        if(err) throw err;
        res.json(resp)
    });
});

//For particular records
productRouter.route('/:prId')
.get(function(req,res){
    Products.findById(req.params.prId,function(err,product){
        if(err) throw err;
        res.json(product)
    })
})
.put(function(req,res,next){
    Products.findByIdAndUpdate(req.params.prId,{
        $set : req.body
    },  {
        new:true
    },  function(err,product){
            if(err) throw err;
            res.json(product);    
    })
})
.delete(function(req,res,next){
    Products.remove(req.params.prId,function(err,resp){
        if(err) throw err;
        res.json(resp);
    })
});
module.exports = productRouter;