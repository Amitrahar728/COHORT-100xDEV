const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {z} = require("zod");
require('dotenv').config();



mongoose.connect(process.env.mongodbacc);

const app = express();
app.use(express.json());



app.post("/signup", async function(req, res) {
    const requiredbody = z.object({
        email: z.string().trim().email().min(3).max(100),
        name: z.string().trim().min(3).max(100),
        password: z.string()
            .min(8, { message: "Length of your password is less than 8" })
            .max(20, { message: "Length of your password is more than 20" })
            .refine((pw) => /[A-Z]/.test(pw), { message: "No uppercase letter present" })
            .refine((pw) => /[a-z]/.test(pw), { message: "No lowercase letter present" })
            .refine((pw) => /[0-9]/.test(pw), { message: "No integer value present" })
            .refine((pw) => /[!@#$%^&*]/.test(pw), { message: "No special character present" })
    });

    const parsedData = requiredbody.safeParse(req.body);

    if (!parsedData.success) {
        return res.status(400).json({
            msg: "Validation Failed",

            errors: parsedData.error.issues.map(err => err.message) 
        });
    }

    
    const { email, password, name } = parsedData.data;

    try {
        const hashedpassword = await bcrypt.hash(password, 5);

        await UserModel.create({
            email: email,
            password: hashedpassword,
            name: name
        });

        return res.json({
            message: "You are signed up"
        });

    } catch(e) {
        console.error("Database Error:", e.message);
        
        
        return res.status(409).json({
            msg: "User already exists or database error"
        });
    }
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });

    if(!response){
        res.status(403).json({
            msg :"user does not exist in your db"
        })
        return 
    }

    const passwordmatch = await bcrypt.compare(password , response.password);


    if (passwordmatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.put("/mark" , auth, async function(req,res){
    const userid = req.userId;

    const title = req.body.title;
    const updated = await TodoModel.updateOne({
        userId : userid,
        title : title
    },{
        $set :{ done : true }
    });
    if (updated.matchedCount === 0) {
            return res.status(404).json({
                message: "Todo not found for this user"
            });
    }

    res.json({
        message: "Todo marked as completed!"
    });
})

app.listen(3000);