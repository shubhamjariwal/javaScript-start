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

/*
Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (non primitive)

let myGirlfriend = "salini"
let anotherGirlfried = myGirlfriend
anotherGirlfried = "pari"

console.log(myGirlfriend);
console.log(anotherGirlfried);

let gfOne = {
    name: "pari",
    age: 18,
}
let gfTwo = gfOne

gfTwo.age = 20

console.log(gfOne.age);
console.log(gfTwo.age);
