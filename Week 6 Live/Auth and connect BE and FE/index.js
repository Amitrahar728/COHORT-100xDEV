const express = require("express");
const jwt = require("jsonwebtoken");
const jwtsecret = "randomamitraveena"

const app = express();
app.use(express.json());
const users =[];

app.post("/signup" , function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    for(let i =0; i<users.length; i++){
        if(users[i].username == username){
            res.json({
                msg:" you are already signed up go and sign in "
            })
            return
        }
    }
    users.push({
        username: username,
        password : password
    })

    res.json({
        msg:"you are signed up"
    })
    

})


app.post("/signin" , function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let founduser = null;


    for(let i =0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
            founduser = users[i];
        }
    }
    if(founduser){
        const token = jwt.sign({
            username : username
        }, jwtsecret)
        res.json({
            token : token
        })
        
    }
    else{
        res.status(403).send({
            msg :"INVALID USERNAME OR PASSWORD"
        })
    }

})


app.get("/me", function(req,res){
    const token = req.headers.token;
    const decodedinfo = jwt.verify(token, jwtsecret);
    const username = decodedinfo.username
    let founduser = null;
    for(let i =0; i<users.length ; i++){
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
            msg : "TOKEN INVALID"
        })
    }
})

app.listen(3000);