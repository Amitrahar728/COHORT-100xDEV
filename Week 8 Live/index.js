const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const { auth, JWT_SECRET } = require("./auth");
require('dotenv').config();

const { userrouter } = require("./routes/user");
const {courserouter } = require("./routes/course");
const {adminrouter } = require("./routes/admin");
const app = express();
  

app.use(express.json());
app.use("/api/v1/user" ,  userrouter);
app.use("/api/v1/course" ,  courserouter );
app.use("/api/v1/admin" , adminrouter);

async function main(){
        if (mongoose.connection.readyState === 0) { // 0 = disconnected
        await mongoose.connect(process.env.mongodbacc);
        console.log("Connected to MongoDB");
         }
        app.listen(3000);
        
}

main()