var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get("/", function(req, res){
  res.render("index");
});

router.get("/about",function(req, res){
  res.render("about");
});

router.get("/events",function(req,res){
  res.render("gallery");
});

router.get("/contact",function(req,res){
  res.render("contact");
});

router.get("/success",function(req,res){
  res.render("success");
});

router.post("/submit",function(req,res){
  let name = req.body.name;
  let email = req.body.email;
  let number = req.body.number;
  fs.appendFile("data.txt",`name: ${name},email: ${email}, number: ${number}\n`, (e) =>{
    if (e) {
      console.log(e);
    } else {
      res.redirect("/success");
    }
  })
});

module.exports = router;
