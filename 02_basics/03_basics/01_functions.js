// console.log("R");
// console.log("o");
// console.log("h");
// console.log("a");
// console.log("n");

//////////////Function///////////////

function sayMyName(){
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("n");
}

// sayMyName()

// function addTwoNumber(number1, number2){
    
//     console.log(number1 + number2);

// }

function addTwoNumber(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(3, 9)

//console.log("Result: ", result);

function loginUserMessage(username = "User"){
    //username === undefined
    if(!username){
        console.log("");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Shubham")
);


