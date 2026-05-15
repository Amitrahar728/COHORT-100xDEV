import express from "express";
//  Always import like this
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import z, { string } from "zod";
import { UserModel, LinkModel, TagsModel, ContentModel } from "./db.js";
import { NOTIMP } from "dns";

import { userMiddleware } from "./middleware.js";

dotenv.config();
const app = express();
import { JWT_PASSWORD } from "./config.js";
mongoose
    .connect(process.env.mongodb_acc as string)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((e) => console.log("MongoDB connection failed:", e));

// y1SID3XKDaeYa7cd <---- password of this database
// amitrahar728_db_user <<--------------username
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
    const username = req.body.username;
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
            JWT_PASSWORD,
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
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const title = req.body.title;
    const tags = req.body.tags;
    try {
        await ContentModel.create({
            link,
            title,
            userId: new mongoose.Types.ObjectId(req.userId),
            tags: tags || []
        })
        res.json({ msg: "Content Added" });
    }
    catch (e) {
        console.log(e)
        res.status(500).json({
            msg: "Error adding content"
        });
    }


});




app.get("/api/v1/content", userMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) {
        return res.status(403).json({ msg: "You are not logged in" });
    }


    const content = await ContentModel.find({
        userId: new mongoose.Types.ObjectId(req.userId)
    }).populate("userId", "username")//by populate we can fetch some things from reffered places
    
    
    res.json({
        content
    })
});




app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    try {
        await ContentModel.deleteOne({
            _id: contentId,
            userId: new mongoose.Types.ObjectId(req.userId)
        });

        res.json({
            msg: "Content deleted"
        });
    } catch (e) {
        res.status(500).json({
            msg: "Error deleting content"
        });
    }
});



app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    try {
        if (share) {
            await LinkModel.create({
                userId: new mongoose.Types.ObjectId(req.userId),
                hash: Math.random().toString(36).substring(2)
            });

            res.json({
                msg: "Shareable link created"
            });
        } else {
            await LinkModel.deleteOne({
                userId: new mongoose.Types.ObjectId(req.userId)
            });

            res.json({
                msg: "Link removed"
            });
        }
    } catch (e) {
        res.status(500).json({
            msg: "Error updating share settings"
        });
    }
});


app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    try {
        const link = await LinkModel.findOne({ hash });

        if (!link) {
            return res.status(404).json({
                msg: "Invalid share link"
            });
        }

        const content = await ContentModel.find({
            userId: link.userId
        });

        res.json({
            content
        });
    } catch (e) {
        res.status(500).json({
            msg: "Error fetching shared content"
        });
    }
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});
