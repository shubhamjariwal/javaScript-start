let name = "shubham"
let age = 20

console.log(name + age + " jariwal");
///////////////////////////////////////////////

console.log(`I am ${name} my age is ${age}`);
//////////////////////////////////////////////

const gameName = new String("shubham")

// console.log(gameName[6]);
// console.log(gameName.length);
// console.log(gameName.__proto__);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('b'));

const newString = gameName.substring(0, 4)
console.log(newString);
//////////////////////////////////////////////

const anotherString = gameName.slice(-7, 6)
console.log(anotherString);
/////////////////////////////////////////////

const anotherStringOne = "       shubham"
console.log(anotherStringOne.trim());
console.log(anotherStringOne);
/////////////////////////////////////////////

const url = "https://shubham.com/shubham%20jariwal"
console.log(url.replace("%20","-"));
//////////////////////////////////////////////

console.log(url.includes("shubham"));
//////////////////////////////////////////////

console.log(gameName.split("-"));
/////////////////////////////////////////////



