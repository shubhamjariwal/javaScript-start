// singhleton

Object.create


// object literals

const mySym = Symbol("key1")

const js_user = {
    name: "shubham",
    "full name": "Shubham Jariwal",
    
    [mySym]: "key1",
    age: 20,
    location: "bhopal",
    email: "shubham@gmail.com",
    isLoggedIn: false,
}

console.log(js_user.email);
console.log(js_user["email"]);
console.log(js_user["full name"]);/////////////imp
console.log(js_user.mySym);
console.log(typeof js_user.mySym);

console.log(typeof mySym);

console.log(js_user[mySym]);

console.log(typeof js_user[mySym]);

/////////////////////////////////////////////////

js_user.email = "shubhamjariwal2@gmail.com"


Object.freeze(js_user)

js_user.email = "shubjashbdnl@gamil.com"

console.log(js_user);

//////////////////////////////////////////////

js_user.greetingOne = function(){
    console.log("Hello JS User");
}
js_user.greetingTwo = function(){
    console.log(`Hello JS User, I am ${this["full name"]} and my age is ${this.age}`);
}

console.log(js_user.greetingOne());
console.log(js_user.greetingTwo());






