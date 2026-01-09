const  { Router } = require("express");
const adminrouter = Router();
const {adminmodel} = require("../db");

adminrouter.post("/signup", function(req,res){
    res.json({
        msg : "Signup endpoint"
    })
})

adminrouter.post("/signin", function(req,res){
    res.json({
        msg : "Signin endpoint"
    })
})

adminrouter.post("/", function(req,res){
    res.json({
        msg : "course learning endpoint"
    })
})



module.exports ={
    adminrouter: adminrouter
}

