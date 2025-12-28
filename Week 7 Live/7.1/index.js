const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://amitrahar728_db_user:Iamamit%401222@cluster0.ffppzdd.mongodb.net/Todo-app-database");

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    // console.log("DEBUG: Connecting to ->", process.env.MONGO_URL);
    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password,
    });

    if (response) {
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