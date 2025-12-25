function main(){
    fetch("https://sum-server.100xdevs.com/todos")
    .then(  
            async response =>{
            const json = response.json();
            console.log(json.todos.length);
        }
    )
}

main();


// axios let you do this same task in more cleaner way 

const axios = require(axios);

async function main(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos.length);
}


// -----------------------------------------------------------
function main(){
    fetch("https://sum-server.100xdevs.com/todos",{
        method:"PUT"
    })
    //by default fetch function is get always 
    .then(  
            async response =>{
            const json = response.json();
            console.log(json.todos.length);
        }
    )
}

main();


// axios let you do this same task in more cleaner way 



async function main(){
    const response = await axios.delete("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos.length);
}



//  in axios we dont need to know that what type of data is coming json or text from the frontend if post request is made