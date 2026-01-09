const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {z} = require("zod");
const { auth, JWT_SECRET } = require("./auth");

const { userrouter } = require("./routes/user");
const {courserouter } = require("./routes/course");
const {adminrouter } = require("./routes/admin");
const app = express();
  
app.use("/api/v1/user" , auth , userrouter);
app.use("/api/v1/course" , auth , courserouter );
app.use("api/v1/admin" ,auth , adminrouter);

async function main(){
        await mongoose.connect(mongodbacc);
        
        app.listen(3000);
        console.log("liestning on port 3000 now ")
}

main()