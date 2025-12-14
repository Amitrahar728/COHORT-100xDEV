// a browser can only understand html , css and javascript , assembly(Sometimes c , c++ like removing background in zoom call or video download ony 1% of websites use these ) 



//  c++ is first compiled in binary file then run on machine 
//  but js directly can be runned because js is compiled line by line 


// Performance overhead
// more prone to runtime error
//  because js is directly run


// single threaded run -> meaning it processes one task at a time 
// It only takes one cpu at a time at max 
// SYntax of javascript :
// Assignment 01
function sum(a,b){
    return a+b;
}
function calculate(age){
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}
function greet(info){
    let ans = "hi "+ info.firstname+" "+info.lastname + " your age is " + info.age ;
    return ans;
}

let data ={
    firstname : "Amit",
    lastname :"Rahar",
    age : "20"
}
console.log(greet(data));


// Assignment 
function check(array){
    let len = array.length;
    for(let i =0; i<len; i++){
        if(array[i].age >18 ){
            if(array[i].gender =="M"){
                console.log(array[i].n);
            }
        }
    }
}

let arr =[ {n : "nishant" , age : "21", gender: "M"  } , {n : "Amit" , age : "20", gender: "M"  },{n : "Tanvi didi" , age : "4", gender: "F"  },{n : "Prem" , age : "17", gender: "M"  }];
// console.log(check(arr));
check(arr); 
let ans = sum(1,4);
let ans2 = sum("amit", 4);

console.log(ans);
console.log(ans2);


let ans3 = calculate(19);
console.log(ans3);