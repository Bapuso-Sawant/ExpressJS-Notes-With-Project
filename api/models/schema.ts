var mongoose = require("mongoose")
var assert = require("assert")
var Schema = mongoose.Schema;
var productSchema = new Schema({
    name: {
        type:String,
        require:true,
        unique:true,
    },
    description:{
      type:String,
      required:true,
    }   
},{
  timeStamps:true //it add 2 fileds createdAt and updatedAt
})
var Products = mongoose.model("Product",productSchema);
module.exports = Products;