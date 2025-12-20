const express = require("express");

const app = express();

app.get('/', function(req,res){
    //first is / means which route i listen too 
    // req is for requirements or inputs
    // res is response which is something we are providing as output
    
    res.send("hi there");
})


app.listen(3000);