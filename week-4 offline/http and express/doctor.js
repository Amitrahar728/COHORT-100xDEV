const express = require("express");
const app = express();

const users=[{
    name:"john",
    kidneys:[{
        healthy : false
    }]
}];


app.get("/count" , function(req,res){
    const cnt = users[0].kidneys;
    const noofkidneys = cnt.length;

    //filter is used for checking how many kidneys are true or how many are false 
    let num =0;
    for(let i =0; i<cnt.length; i++){
        if(cnt[i].healthy){
                num = num+1;
        }
    }
    const unhealthy = noofkidneys-num;
    res.json({
        noofkidneys,
        unhealthy,
        num
    }
    );

    //  filter in js 
    //  creates a new array filled with elements that pass a test provided by a function.
    // picks value by value everything

});

app.use(express.json());
// this is for so that we can take post request body input 

app.post("/", function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg:"Done"
    })
}) 

app.put("/" , function(req,res){
    for(let i =0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})


app.delete("/" , function(req,res){
    const newkidneys ={};
    for(let i =0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                health:true
            })
        }
    }
    users[0].kidneys = newkidneys;
    res.json({
        msg:"done"
    })
})
app.listen(3000);