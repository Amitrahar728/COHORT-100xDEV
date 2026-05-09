
// 
// let x: string = "Amit";
// // x = "harkirat"// this was possible in js but not in typescript 

// console.log("hello "+x);

//  PRINT FIRST NAME : 

// let firstname :any = 1;
// greet(firstname)

// function greet(firstname: any){
//     console.log("Hello " + firstname );
// }



// SUM FUNCTION 

// function sum(x: number, y : number){
//     return x+y;
// }

// let ans = sum(1,2);
// console.log(ans);



//  A function defined with types : 
// function delayedfunc(anotherfunc : ()=> void)
// {
//     setTimeout(anotherfunc, 1000);
// }
// function log(){
//     console.log("HELLO AMIT");
// }
// delayedfunc(log);



//  TARGET in TS :
// IT IS A TOOL in tsconfig.js wehre we can change our typscript ECMA version to any version present in past 

// ECMASCRIPT :
// Every year new code comes up inside js so chrome v8 , firefox spidermonkey should get updated so that we are able to run new js commands/

//  rootDir : means that we can structure  our typescript in one folder src 
//  outDir : means that we can structure our js codes in outDir an dgitignore it 

//  giving types to objects

function greet(user :{
    name : string , age : number
}){
    console.log("hello"+ user.name);
}

greet({
    name : "Amit",
    age : 21
})


let firstname : string = "Amit"
let user : {
    firstname : string ,
    age : number
}  =  {
    firstname : "AMIT" ,
    age : 21
}


 // we can define interfaces for defining object types at once so reusability of code can increase
//  simply like :

//  INTERFACES : 
interface UserType{
    firstname : string,
    lastname: string,
    age : number
}

function greet2(user : UserType){
        console.log(user.firstname);

}
// Even we can add interface into interfaces like in UserType we can also define one more interface UserType2 and so on and define them outside or inside look for an example easy peasy 


//  TYPES : 

// similar to interfaces but provides us something extra like :
// types provides us using union like string | number;
//  types lets us do intersection between two types 

interface Manager {
    name: string ,
    age:number
}
 interface Employee {
    name : string ,
    department : string 
 }

 type teamlead = Employee & Manager;
//  now teamlead as all three things 

// interfaces can be implemented in a class  property of interfaces


