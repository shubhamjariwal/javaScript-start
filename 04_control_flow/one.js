// if istatemant

const temperature = 31;

// if(temperature < 30){
//         console.log("Temperture is less then 30");
// }
// else{
//     console.log("Temperature is greater then 30");
// }

// <, >, ==, ===, <=, >=, !=, !==

const score = 200;

// if(score > 100){
//         let power = "fly"
//         console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

const balance = 1000;

// if (balance < 500) {
//     console.log("Balance is less then 500");
// }
// else if (balance < 750) {
//     console.log("Balance is less then 750");
// }
// else if (balance < 900) {
//     console.log("Balance is less then 900");
// }
// else {
//     console.log("Balance is less then 1200");
// }

const userloggedIn = true;
const debitcart = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
let guestUser;

if (userloggedIn && debitcart) {
  console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("User logged in");
}