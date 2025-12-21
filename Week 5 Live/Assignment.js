// Assignment:
// create a backend server in Node.js that returns the sum endpoint 
// write an html file , that hits the backend server using the 'fetch' api


const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors()); // for some particular domains write down particular domains here in use 
// or host the frontend on same port of html server server
app.post("/sum", function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a+b
    })
})

app.listen(3000);