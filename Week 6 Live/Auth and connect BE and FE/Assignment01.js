// Can you try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn’t logged in?

// we just have to add a middleware by which we can remove the decoding of jwt and the if correct jwt and else msg where we say token is wrong should be added in middleware .


const express = require("express");
const jwt = require("jsonwebtoken");
const jwtsecret = "randomamitraveena"

const app = express();
app.use(express.json());
const users =[];

function logger(req,res,next){
    console.log(req.method +"request came");
    next();
}


app.get("/" , function(req,res){
    res.sendFile(__dirname +"/public/frontend.html");
})

app.post("/signup" ,logger ,  function(req,res){
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


app.post("/signin" ,logger , function(req,res){
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

        res.header("jwt" , token);
        res.header("random" , "harkirat");

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

function auth(req,res, next){
    const token = req.headers.token;
    const decodedata = jwt.verify(token,jwtsecret);

    if(decodedata.username){
        req.username = decodedata.username
        next()
    }
    else{
        res.json({
            msg: " you are not loged in"
        })
    }
}



app.get("/me", logger, auth, function(req, res) { 
    let founduser = users.find(u => u.username === req.username);

    if (founduser) {
        res.json({
            username: founduser.username,
            password: founduser.password
        });
    } else {
        res.status(404).json({ msg: "User not found in current session" });
    }
});

app.listen(3000);