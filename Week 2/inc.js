// try to create promosified version of settimeout
// fetch 
// FileSystem.readfile

let fs = require("fs");

const data = fs.readFileSync("a.txt" , "utf-8"); // synchronous task 
console.log(data);

function print(err , data){
    console.log(data);

}

 fs.readFile("a.txt" , "utf-8" , print); // Asychronous task 

console.log("Task 1");
console.log("Task 2");
function timeout(){
    console.log("Hello Amit");
}

setTimeout(timeout, 5);

for(let i =0; i<100; i++){
    console.log(i);
}

console.log("Amit");
let c=0;
for(let i =0;i <100; i++){
    c=c+1;

}

console.log(c);

// readfile takes 3 parameters because the readfile return error+content of file so we have to seprate errr by 3 parameter function

// fs -> file system library 
// used for multiple readfile instruct ions