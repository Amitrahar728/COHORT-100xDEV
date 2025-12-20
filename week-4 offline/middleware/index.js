const express = require("express");
const app = express();


//  function that returns a boolean if the age of the person is more than 14

function isagegood(age){
    if(age>14){  // kind of a ticket checker outside the amusement park 
        return true;
    }
    else{
        return false;
    }
}

//  but middlewares are a little different

function isagegoodmiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){ 
        next(); 
    }
    else{
        res.json({
            msg:"Sorry you are not of required age yet"
        })
    }
}
// app.use(isagegoodmiddleware); //this can be used instead using them in routes but the routes defined below this middleware are working based upon it the routes definded above it are not accessing these middleware
app.get("/ride1",isagegoodmiddleware, function(req,res){
        res.json({
            msg:"you have successfully riden ride 1"
        });
})

app.get("/ride2",isagegoodmiddleware, function(req,res){
        res.json({
            msg:"you have successfully riden ride 2"
        });
   
})

app.listen(3000);