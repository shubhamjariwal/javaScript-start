//+++++++++++++++++ DATES ++++++++++++++++++++//

let myDate = new Date();

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());

///////////////////////////////////////////////

console.log(typeof myDate);

///////////////////////////////////////////////

//let myCreatedDate = new Date(2023, 7, 14)
let myCreatedDate = new Date(2023, 7, 14, 16, 48)
//let myCreatedDate = new Date("2003-08-14");

console.log(myCreatedDate.toLocaleString());

/////////////////////////////////////////////////

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

/////////////////////////////////////////////////

let newDate = new Date();

console.log(newDate.toLocaleDateString());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getMilliseconds());

console.log(`Today the date is ${newDate.toLocaleDateString()} and time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getMilliseconds()} .`);

/////////////////////////////////////////////////

console.log(newDate.toLocaleString("default", { timeStyle: "long", }));
