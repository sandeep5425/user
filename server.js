var express =require("express");

var app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    next();
})  

var  userApi = require("./controller/users.controller")
app.use("/api",userApi);

app.listen(8080);

console.log("Server is running on 8080");