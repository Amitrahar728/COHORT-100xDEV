const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

// if we dont use app.use(express.json()) we dont get anything in req.body 

app.post("/sum" , function(req,res){
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans : a+b
    })
})


// cors : cross origin resource sharing 


