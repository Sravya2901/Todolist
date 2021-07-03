const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
var items=["Cook Food","Buy Food","Eat Food"];
let workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function(req,res){
  let day=date.getDate();
  res.render("list",{ListTitle:day,newItemAdd:items});
});
app.post("/",function(req,res){
  var next_item=req.body.nextItem;
  if(req.body.list==="Work")
  {
    workItems.push(next_item);
    res.redirect("/work");
  }
  else
  {
    items.push(next_item);
    res.redirect("/");
  }
});
app.get("/work",function(req,res){
  let item=req.body.nextItem;
  res.render("list",{ListTitle:"Work list",newItemAdd:workItems});
  res.redirect("/work");
});
app.get("/about",function(req,res){
  res.render("about");
});
app.listen(3000,function()
{
  console.log("Server has started and listening on port 3000");
});
