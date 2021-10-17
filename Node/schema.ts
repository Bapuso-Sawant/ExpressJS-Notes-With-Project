var mongoose = require("mongoose")
var assert = require("assert")
var Schema = mongoose.Schema;
var tutorialsSchema = new Schema({
    topic: {
        type:String,
        require:true,
        unique:true,
    },
    description:{
      type:String,
      required:true,
    }
})
var Tutorials = mongoose.model("tutorials",tutorialsSchema);
module.exports = Tutorials;