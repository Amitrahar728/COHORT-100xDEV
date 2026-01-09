const {Router} = require("express");

const userrouter = Router();

userrouter.post("/signup", function(req,res){
    res.json({
        msg : "signup endpoint"
    })
})


userrouter.post("/signin",function(req,res){
    res.json({
        msg:"you are signin up "
    })
})


userrouter.post("/purchases" , function(req,res){
    res.json({
        msg : " your purchased courses"
    }
    )
})


module.exports = {
    userrouter : userrouter 
};
