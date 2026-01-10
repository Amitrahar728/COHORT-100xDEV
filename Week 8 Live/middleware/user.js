const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function usermiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token , JWT_SECRET);
     if(decoded){
        req.userid = decoded.id;
        next();
     }
     elseP
     res.status(403).json({
        msg :"You are signed in"
     })
}

module.exports ={
    usermiddleware : usermiddleware
}