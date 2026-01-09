const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// require('dotenv').config();
// mongoose.connect(process.env.mongodbacc);
console.log("connected to ");
require('dotenv').config();



mongoose.connect(process.env.mongodbacc);


const users = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname : String,
    lastname : String,
})

const course = new Schema({
    title : String,
    description : String,
    price : Number,
    imageUrl : String ,
    creatorid : ObjectId
})

const admin = new Schema({
    
    email : {type: String, unique: true} ,
    password : String,
    firstname : String, 
    lastname : String 
})
const purchased = new Schema({
    courseid : ObjectId,
    userid : ObjectId
})


const usermodel = mongoose.model("user" , users);
const adminmodel = mongoose.model("admin" , admin);
const coursemodel = mongoose.model("course" , course);
const purchasemodel = mongoose.model("purchase" , purchased);

module.exports ={
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}