var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    firstName :String,
    lastName : String,
    age:Number,
    mobileNumber:Number,
    email:String,
    password:String
});

module.exports = mongoose.model("user" , userSchema , "Users")