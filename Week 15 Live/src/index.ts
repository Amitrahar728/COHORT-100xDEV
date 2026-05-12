import express from "express";
//  Always import like this
const app = express();
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const jwtsecretkey = "amit12345";
import bcrypt from "bcrypt";
const JWT_SECRET = process.env.secretkey as string;
import z, { string } from "zod";

import dotenv from "dotenv";
dotenv.config();
mongoose
    .connect(process.env.mongodb_acc as string)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((e) => console.log("MongoDB connection failed:", e));

// y1SID3XKDaeYa7cd <---- password of this database
// amitrahar728_db_user <<--------------username
import { UserModel, LinkModel, TagsModel, ContentModel } from "./db.js";
import { NOTIMP } from "dns";
app.use(express.json());

//  Express code is still in javascript but when ts come into the picture
// express developers wrote typestypescript file
// which needs to be installed using  npm install -D @types/express so we need declaration file always.

//  now routes
app.post("/api/v1/signup", async (req, res) => {
    const requiredbody = z.object({
        username: z.string().trim().min(3).max(100),
        password: z
            .string()
            .min(8, { message: "Length of your password is less than 8" })
            .max(20, { message: "Length of your password is more than 20" })
            .refine((pw) => /[A-Z]/.test(pw), {
                message: "No uppercase letter present",
            })
            .refine((pw) => /[a-z]/.test(pw), {
                message: "No lowercase letter present",
            })
            .refine((pw) => /[0-9]/.test(pw), { message: "No integer value present" })
            .refine((pw) => /[!@#$%^&*]/.test(pw), {
                message: "No special character present",
            }),
    });

    const parsedData = requiredbody.safeParse(req.body);

    if (!parsedData.success) {
        return res.status(400).json({
            msg: "Validation Failed",

            errors: parsedData.error.issues.map((err) => err.message),
        });
    }

    const { username, password } = parsedData.data;
    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
        return res.status(409).json({
            msg: "User already exists",
        });
    }

    try {
        const hashedpassword = await bcrypt.hash(password, 5);

        await UserModel.create({
            password: hashedpassword,
            username: username,
        });

        return res.json({
            message: "You are signed up",
        });
    } catch (e) {
        if (e instanceof Error) {
            console.error("Database Error:", e.message);
        }

        return res.status(409).json({
            msg: "Some database error",
        });
    }
});

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        username: username,
    });

    if (!response) {
        res.status(403).json({
            msg: "Such username does not exist in your db",
        });
        return;
    }

    const passwordmatch = await bcrypt.compare(password, response.password);

    if (passwordmatch) {
        const token = jwt.sign(
            {
                id: response._id.toString(),
            },
            JWT_SECRET,
        );

        res.json({
            token,
        });
    } else {
        res.status(403).json({
            message: "Incorrect creds",
        });
    }
});
app.post("/api/v1/content", async (req, res) => {
    username: req.body.username;
    password: req.body.password;



});
app.get("/api/v1/content", (req, res) => { });
app.delete("/api/v1/content", (req, res) => { });
app.post("/api/v1/brain/share", (req, res) => { });
app.get("/api/v1/brain/:shareLink", (req, res) => { });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
