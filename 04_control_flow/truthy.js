const userEmail = []

if(userEmail){
    console.log("got user email");
}
else{
    console.log("Don't have user email");
}

// Falsy value

// false, 0, -0, "", null, undefined, NaN, BigInt 0n

// Truthy value

// "0", " ", 'false', [], {}, function(){}

if (userEmail.length === 0) {
    console.log("array is empty");
}

////////////////////////////////////////////////////////

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// nullish coalescing operator (??): null undefined

let val1;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? undefined ?? 10
// val1 = null ?? undefined
val1 = undefined ?? 10 ?? 20

console.log(val1);

// terniary operators

// condition ? true: false
const iceCoffiePrice = 99

iceCoffiePrice >= 80 ? console.log("greater then 80"): console.log("less then 80");




