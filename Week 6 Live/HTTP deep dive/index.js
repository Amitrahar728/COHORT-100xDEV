const express = require("express");

const app = express();

app.use(express.json());

const users =[];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
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
        const token = generateToken();
        founduser.token = token;
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
    const token = req.headers.authorization;
    let founduser = null;
    for(let i =0; i<users.length; i++){
        if(users[i].token == token){
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