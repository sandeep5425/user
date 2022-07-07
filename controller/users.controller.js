var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var userModel = require("../model/userModel");``

//connection url
var db = "mongodb://localhost:27017/Users";

mongoose.Promise = global.Promise;
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log("Error !" + err);
  }
);

router.get("/user", (req, res) => {
  var email = req.params["username"];
  var password = req.params["password"];
  userModel.find({ email: email, password: password }, (err, data) => {
    if (err) {
      console.log("Error !");
    }
    res.send(data);
  });
});

router.post("/user", (req, res) => {
    var userCount = userModel.count(userModel.find({email:req.body.email}))
    if(userCount>0){
        res.send({msg:"User Already Exists"})
    }

    var newUser = new userModel();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.age = req.body.age;
    newUser.mobileNumber = req.body.mobileNumber;
    newUser.email= req.body.email;
    newUser.password = req.body.password;

    newUser.save((err,data)=>{
        if(err){
            console.log(err);
        }
        res.send({msg:"User registered sucessfully"})
    })

});

module.exports = router;

