const {JWT_SECRET2} = require("../config");
const jwt = require("jsonwebtoken");


function adminmiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token , JWT_SECRET2);
     if(decoded){
        req.userid = decoded.id;
        next();
     }
     
     else{
     res.status(403).json({
        msg :"You are signed in inside admin portal "
     })
     }
}

module.exports ={
    adminmiddleware : adminmiddleware
}
