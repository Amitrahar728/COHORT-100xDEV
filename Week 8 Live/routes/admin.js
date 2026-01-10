const  { Router } = require("express");
const adminrouter = Router();
const {adminmodel, coursemodel} = require("../db");
const jwt = require("jsonwebtoken")
const {JWT_SECRET2} =require("../config");
const {z} = require("zod");
const bcrypt = require("bcrypt");
const { adminmiddleware } = require("../middleware/admin");

adminrouter.post("/signup",async function(req,res){
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
        await adminmodel.create({
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

adminrouter.post("/signin", async function(req,res){
    const{email , password} = req.body ;
        const responseadmin = await adminmodel.findOne({
            email: email
        })
        if(!responseadmin){
            res.status(403).json({
                msg: " user not found in database go and first sign up yourself "
            })
            return 
        }
        
        const verify = await bcrypt.compare(password , responseadmin.password);
        
        if(verify){
            const token = jwt.sign({
                id : responseadmin._id.toString()
            }, JWT_SECRET2);
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

adminrouter.post("/course", adminmiddleware  , async function(req,res){
// Example for coping when want to use 
//     {
//     "title": "code in c++",
//     "description" : " a good course ",
//     "iamgeurl " : "https : // shfadfkewf",
//     "price" : "492832"
// }

    const adminid = req.userid;

    const {title , description , imageurl , price } = req.body;


    const course = await coursemodel.create({
        title: title,
        description : description,
        imageurl : imageurl ,
        price : price,
        creatorid : adminid
    })
    res.json({
        msg :"course created " ,
        courseid : course._id 
    })
})
adminrouter.put("/course" , adminmiddleware , async function(req,res){
    const adminid = req.userid;

    const {title , description , imageurl , price ,courseid } = req.body;


    const course = await coursemodel.updateOne({
        _id : courseid,
        creatorid : adminid
    }, {
        title: title,
        description : description,
        imageurl : imageurl ,
        price : price,
        creatorid : adminid
    })

    res.json({
        msg :"course updated" ,
        courseid : course._id 
    })
})
adminrouter.get("/course/bulk" ,adminmiddleware , async function(req,res){
    const adminid = req.userid;

    const course = await coursemodel.find({
        creatorid:adminid
    })


    res.json({
        msg: " All the courses ",
        course
    })
})



module.exports = {
    adminrouter: adminrouter
}



