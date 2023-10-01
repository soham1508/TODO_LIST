const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");
 
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
let newItems=[]
app.get("/",(req,res)=>{
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
let day=today.toLocaleDateString("en-US", options);
res.render("list",{Kindofday:day,newListItems:newItems});
    
});
app.post("/",(req,res)=>{
    let newItem=req.body.newItem;
    newItems.push(newItem);
    res.redirect("/");
});




app.listen(3000,()=>{
    console.log("server is running at port 3000");
});
