const {Router} = require("express");
const courserouter = Router();
const {usermiddleware} = require("../middleware/user");
const {purchasemodel } = require("../db");


courserouter.post("/purchase" ,usermiddleware , async function(req,res){
    const userid = req.userid;
    const courseid = req.body.courseid;
    await purchasemodel.create({
        userid, 
        courseid
    })
    res.json({
        message :"purchase successfull"
    })
})

courserouter.get("/preview" , async function(req,res){

    const courses = await coursemodel.find({});

    res.json({
        courses
    })
})

module.exports={
    courserouter : courserouter 
}


