
// 

// see harkirat notes for ts they are too good 

// let x: string = "Amit";
// // x = "harkirat"// this was possible in js but not in typescript 

import { NumberLiteralType } from "typescript";

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

// ----------------------------------------------------------------------------
// Lecture  2: 

// Basic functions : 

function sum(a:number , b : number): number{
    return a +b 
}

function isEven (num: number) : boolean{
    if(num%2 == 0){
        return true
    }
    else{
        return false
    }
}


// Interfaces and types :


//  interface : used to provide explicitly type to objects so that reusability 
// can be increased if there are multiple objects of same type 


interface User{
    name : String,
    age : number,
    address:{
        city :String ,
        country: String,
        pincode: String
    };
}
//  two functionalities are also here
// 1.) use of optional ? : means it can be present in object or not  
interface User4{
    name : String,
    age : number,
    address?:{
        city :String ,
        country: String,
        pincode: String
    };
}
//  either define it complete all 3 parameters or dont define any single parameter of address when it is defined as optional 


// 2.) undefined can be wriiten 
interface User3{
    name : String,
    age : number,
    address :undefined | {
        city :String ,
        country: String,
        pincode: String
    };
}

// 3.)  Interface can be inside other interfaces also 
//  here if same thing is needed for multiple objects in similar manner can be written once and used multiple times 

interface Address {
    city: String, 
    country : String,
    pincode : String
}
interface User5{
    name : String,
    age : number,
    address : Address
}
interface Add{
    address: Address
}


//  object user 
let user2: User = {
    name : "AMiT",
    age : 21,
    address :{
        city : "KIRDHAN",
        country : "INDIA" , 
        pincode:"125053"
    }

}
function isLegal(user2 : User): boolean{
    return user2.age>=18;
}



// ---------------------------------------------------------------------

// Implementing Interfaces

// using interface we can create a simple key value pair objects individually 
//  secondly we can also implement classes by interfaces which can invoke objects 

//  This is a interface 
interface People{
    name : string;
    age : number;
    // greet : () => string;
    // class should have defination of all the units defined
    //  in interface and can also define more things 
    isLegal(): boolean // this is the property why we implement classes because defination of function can be defined in class 
}


//  this is  a key: pair simple object in ts 
// let person : People = {
//     name : "AMit",
//     age : 21,
//     greet() => {
//         {

//     }
// };


//  this is a class 
class Manager implements People{
    name : string ;
    age : number;

    constructor(name : string , age : number){
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age>18;
    }
}

let man = new Manager("amit", 21);

console.log(man.name);



//  may be there can be more and more Employee or teamlead class implementing same interface
// Questions 

// Implementing interfaces (types vs interface)
// abstract class vs interface(can write default defination of function in abstract )

//  Types: 

// syntax ( only two difference use type instead of interface and = (equal to symbol))
type user = {
    name: string ;
    age : number;
}

// 2.) Lets us do union and intersection 
// we cannot do this in interfaces 

// Union & intersection example  :

type User6 ={
    name : string;
    age : number;
}

type Student = {
    name: string ;
    class : string;
}

// if i want all 3 things in one type then we can create it easily  using intersection (&):

type team = Student & User6;

// union take any one of both if they had both of them it still works 


type team2 = Student|User6;

// so team 2 object can have all values or it also does not restrict us to add all 3 we can also add only one type object 

//  in intersection we need to have everything there is a restriction but there is no restriction in union but not less than one type extra is fine 

type User7 ={
    name : String;
    age : number;
}

type admin = {
    name : String;
    department : number;
}

type join = User7 |admin;

let obj2 : join ={
    name: "Amit",
    age : 23 
}

function greet3(obj : join ){
    console.log("Hello "+ obj.name);
}

greet3(obj2);


// interface nayya {
//     firstname : string,
//     lastname : string,
//     age : number
// }
// const obj = ([
//     firstname : "AMIT",
//     lastname : "RAHAR",
//     age : 22
// ])
// const obj8 = ([
//     firstname : "TANISH",
//     lastname : "GUPTA",
//     age : 70
// ])
// const obj0 = ([
//     firstname : "JAI",
//     lastname : "GJD",
//     age : 9
// ])
// const obj9 = ([
//     firstname : "PUNEET",
//     lastname : "PANWAR",
//     age : 13
// ])

// function islegal2(obj :User[]){
//     let ans = []
//     for(let i =0; i<obj.length; i++){
//         if(obj[i].age>18){
//             ans.push(obj[i]);
//         }
//     }
//     return ans;
// }

// let arr[] = [obj , obj8 , obj9 , obj0];





// ### One thing is That you shoudl now ki in intersection under intersection while defining number| string we can use | and & but not between 2 different interfaces 



// see harkirat notes for ts they are too good 


// ------------------------------------------------------------------------------------------------

// LECTURE 3 of TYPESCRIPT:


// SOME HARD CONCEPTS IN TYPESCRIPT

// Partial , 
// 



// Readonly (to make the whole object including interanls object also not able to edit )
//  the things like API key by mistake dont get changed 

//  Records and Map

//  A eaiser way to deal with objects 

// for cooler syntax defining 

type Users = Record<string , {age: number ; name: string}>;

const users : Users = {
    "ajfdfd" : {
        age : 21 , name : "Aimit"
    },
    "jabdsjk":{
        age :11 , name : "Aerin"
    }
}

// here using record we can define the syntax easily

//  MAP:  Its not a typescript concept only it is also a js concept 
//  just a simple way to define object so that can be fetched easily 

const one = new Map<string, Users>(); // this is the only thing in ts to define tyepes
// one.set("ajfdfd" , {
// //         age : 21 , name : "Aimit"
// //     })
// // one.set("jabdsjk",{
// //         age :11 , name : "Aerin"
// //     })

// const two = one.get("ajfdfd")



// EXCLUDE
// let you exclude bunch of values 

// EXample:
type Event = 'click'|'mouse'|'key';
type exclude = Exclude<Event, 'click'>; // only do contain mouse and key here 




// ---------------------------------------------------------------

// One more video see it from cohort 2 videos related to enum and generics 

// ENUMS :
// stands for enumeration 
// To define a set of named constants 


function dosome(KeyPressed: string){
    if(KeyPressed == "up"){
        // 
    }if(KeyPressed == "down"){
        // 
    }
}

dosome("up");
dosome("down");
dosome("downrandom");// which is not good 
// this is wrong because this is not defined in if statements of function 
// so to catch this at the time of tsc to js compile time
// so define it like this 

type direction  = "up"|"down"; //this is also a good alternative but not good for readability it is the place where we use 

enum Variable {
    
    up, // nothing but like having index 0

    down // nothing but like having index 1 
}


function dosome2(KeyPressed: Variable){
    if(KeyPressed == Variable.up){
        // 
    }if(KeyPressed == Variable.down){
        // 
    }
}

dosome2(Variable.up);
dosome2(Variable.down);
// dosome2(Variable.somethingrandom); // gives us a erro at runtime 

// instead of using constant variable like "up" by enum we can use Variable.up now 



//  in express js 
//  where we return status codes mostly we know about most of the status codes we can give them ENUMS and instead of remembering them we can give them some name 




//  Generics : HARD CONCEPT 

// Problem : given a function takes array a input of eitehr number or string and we have to return arr[0] 

// what is problem in this approach ???


type Input = number| string;

function firstEl(arr: Input[]){
    return arr[0];
}

const value = firstEl(["amit" , "rahar"]);
// console.log(value.toUpperCase());
//  this kind of property like toUpperCase in ts makes a error because ts only checks types 
//  and when typescript looks for Input and which has type number or string he doesnot know what is given by us in input 
//  because it is confused in number and string that why typescript restrict us from writting  toUpperCase

// Problem 2 : 
//  and this can also have one more problem what if value 2 is like 
const value2 = firstEl(["amit" , "rahar", 1 ]);// and can contain number 


// WE CAN SOLVE BOTH USING GENRICS

function identity<T>(arg:T):T{
    return arg;
}
// <T> : means generic says that identity can be called with anything string , number else anything means any 
// but whenever they call it they shoudl define <T> as <string> or <number> like this 

let out = identity<string>("AMIT");
let output2 = identity<number>(1);
//  hence first problem is solved now 




//  moving up to second problem

function getfirstel<T>(arr: T[]): T | undefined {
    return arr[0];
}

const el = getfirstel(["AMIT" ,"PUNEET"]);
// if we want to defien the type explicitly so the array object does contain only one tyep 
//  we can do 

const el2 = getfirstel<string>(["first" , "Second"]);



//  Export and import modules 

// Until now we are doing :

// const express = require("express");

// BUT USING NEW SYNTAX WE CAN DO :

// import express from "express";


// instead of doing: 
// module.exports = {
    //     a: 1;
    // }


    // BUT USING NEW SYNTAX WE CAN DO :
    export const z = 1;



    // for default exports we can use 
    const a = 1;
    export default a;
    // then importing become easy :


    // import amit from "./that file from where exported"
    //  can export by using any name 