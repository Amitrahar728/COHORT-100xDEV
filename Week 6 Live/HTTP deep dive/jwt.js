const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users =[];
const jwt_secret = "Amit-raveena0";

//  stateless tokens which are not saved anywhere just with the help of jwt.sign we encrypted username in token and with the help of jwt.verify we decrypted the data and got the username from token .

app.post("/signup", function(req,res){
        const username = req.body.username;
        const password = req.body.password;


        if(users.find(u => u.username === username)){
            res.json({
                msgs : "your are already signed up go and sign in "
            })
            return 
        }
        users.push({
            username: username,
            password : password
        })

        res.json({
            msg :" you are signed up "
        })
})
//  if we have to define these function outside then we have to give name to these functions
app.post("/signin" , function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    let founduser  = null;

    for(let i =0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
            founduser = users[i];
        }
    }

    if(founduser){
        const token = jwt.sign({
            username: username
        }, jwt_secret);
        // this will generate a token 

        // founduser.token = token;
        res.json({
            Token : token
        })
    }
    else {
        res.status(403).send({
            msg :"You need to signup first"
        })
    }

})


app.get("/me", function(req,res){
    const token = req.headers.authorization; // now they will send jwt
    const decodedInformation = jwt.verify(token, jwt_secret);
    const username = decodedInformation.username

    res.json({
        username : username
    })

    let founduser = null;

    for(let i =0; i<users.length; i++){
        if(users[i].username == username){
            founduser = users[i];
        }
    }

    if(founduser){
        res.json({
            username: founduser.username,
            password : founduser.password
        })

    }
    else{
        res.json({
            message: "Not found 404"
        })
    }
})

app.listen(3000);