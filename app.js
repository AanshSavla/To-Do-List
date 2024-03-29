//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

 const items=[];
 const workItems = [];


app.get("/",function(req,res){
  var day=date.getDate();
 res.render("list",{title:day,newItem:items});
});

app.post("/",function(req,res){
   item = req.body.addedItem;
   if(req.body.button==="Work"){
     workItems.push(item);
     res.redirect("/work");
   }
  else {
   items.push(item);
   res.redirect("/");
 }
});

app.get("/work",function(req,res){
  res.render("list",{title:"Work",newItem:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3000,function(){
  console.log("Started server on port 3000.");
});
