const {Router} = require("express");
const courserouter = Router();


courserouter.post("/purchase" , function(req,res){
    res.json({
        message :"signup endpoint"
    })
})

courserouter.get("/preview" , function(req,res){
    res.json({
        msg : " here are all the courses "
    })
})

module.exports={
    courserouter : courserouter 
}


