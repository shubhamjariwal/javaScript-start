//  Primitive

/* 7 types:-
    1 = string
    2 = number
    3 = bolean
    4 = bigInt
    5 = undefined
    6 = null
    7 = symbol
*/
const score = 100
const scoreValue = 100.33

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('999')
const anotherId = Symbol('999')

console.log(Id === anotherId);

const bigNumber = 27994637792387403284n



//  Reference (non primitive)

/*
    1 = array
    2 = objects
    3 = functions
*/


const heros = ["Iron man","Hulk","Thor"]; //array

let myObj = {
    name: "shubham",           //object
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

