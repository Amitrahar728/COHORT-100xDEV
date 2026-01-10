const {Router} = require("express");
const { usermodel}  = require("../db");
const bcrypt = require("bcrypt");
const {z} = require("zod");
const jwt = require("jsonwebtoken");
// const { auth, JWT_SECRET } = require("./auth");
const {JWT_SECRET} =require("../config");
const {usermiddleware} = require("../middleware/user");


const userrouter = Router();

userrouter.post("/signup", async function(req,res){
    const requiredbody = z.object({
            email: z.string().trim().email().min(3).max(100),
            
            password: z.string()
                .min(8, { message: "Length of your password is less than 8" })
                .max(20, { message: "Length of your password is more than 20" })
                .refine((pw) => /[A-Z]/.test(pw), { message: "No uppercase letter present" })
                .refine((pw) => /[a-z]/.test(pw), { message: "No lowercase letter present" })
                .refine((pw) => /[0-9]/.test(pw), { message: "No integer value present" })
                .refine((pw) => /[!@#$%^&*]/.test(pw), { message: "No special character present" }),
            firstname: z.string().trim().min(3).max(100),
            lastname: z.string().trim().min(3).max(100)
    });
    
    const parsedData = requiredbody.safeParse(req.body);
    
    if (!parsedData.success) {
        return res.status(400).json({
            msg: "Validation Failed",
    
            errors: parsedData.error.issues.map(err => err.message) 
        });
    }
    
    const { email , password , firstname , lastname} = parsedData.data;
    // added zod validation done todo

    // Todo : password validation so that password is not stored in normal way use bcrypt

    // SOlved todo 

    try{ // done todo of adding try and catch block ..
    const hashedpassword = await bcrypt.hash(password, 5);
    await usermodel.create({
        email ,
        password : hashedpassword , 
         firstname,
      lastname 
    })
    }

    catch(e){
        console.error("Database Error:", e.message);
        
        
        return res.status(409).json({
            msg: "User already exists or database error"
        });
    }

    res.json({
        msg : "signup endpoint"
    })
})


userrouter.post("/signin",async function(req,res){
    const{email , password} = req.body ;
    const response = await usermodel.findOne({
        email: email
    })
    if(!response){
        res.status(403).json({
            msg: " user not found in database go and first sign up yourself "
        })
        return 
    }
    
    const verify = await bcrypt.compare(password , response.password);

    if(verify){
        const token = jwt.sign({
            id : response._id.toString()
        }, JWT_SECRET);
        res.json({
            token : token 
        })
    }
    else{
        res.status(403).json({
            msg:"Incorrect password"
        })
    }
})


userrouter.get("/purchases" ,usermiddleware , async function(req,res){
    const userid = req.userid;

    const purchases  = await purchasemodel.find({
        userid 
    })


    let purchasedcourses = [];
    for(let i =0; i<purchases.length; i++){
        purchasedcourses.push(purchases[i].courseid)
    }

    
    const coursedata = await coursemodel.find({
        _id : {$in : purchasedcourses}
    })


    res.json({
        purchases,
        coursedata
    })
    //  use the razorpay 

})


module.exports = {
    userrouter : userrouter 

};



// done all three todos as said 
