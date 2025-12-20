// look perfect when once defined than callbacks 


// callback
function callback(){
    console.log("Some time is passed");
}

setTimeout(callback, 3000);
 

// promise 
// this is the setTimeoutPromisified class which calls promise class and perform the task .


function setTimeoutPromisified(ms){

    return new Promise(resolve => setTimeout(resolve, ms));
    // dont think about this a lot 
}

setTimeoutPromisified(3000).then(callback);


//Another way 
// instead of callback write down fucntion directly

function waitfor3s(resolve){
    setTimeout(resolve , 3000);
}

function main(){
    console.log("this main is called after 3 second");
}



waitfor3s(main);



function random(resolve){
    setTimeout(resolve, 3000);
}

let p = new Promise(random);


function callback(){
    console.log("Promise succedded");

}
p.then(callback);

// create the promisified function of
// 1.) reads the contents of  a file 
// 2.)left right spacing got removed 
// 3.) write it back to the file 

  