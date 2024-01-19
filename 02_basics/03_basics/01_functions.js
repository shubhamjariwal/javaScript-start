// console.log("R");
// console.log("o");
// console.log("h");
// console.log("a");
// console.log("n");

//////////////Function///////////////

function sayMyName() {
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

function addTwoNumber(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumber(3, 9);

//console.log("Result: ", result);

function loginUserMessage(username = "User") {
  //username === undefined
  if (!username) {
    console.log("");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage("Shubham"));

//////////////////////////////////////////////////

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 222, 333, 555));

const product = {
        productname: "Love",
        price: "0 (Not available in this generation)"
}

function productList(anyproduct){
        console.log(`Product is ${anyproduct.productname} and Price is ${anyproduct.price}`);
}

// productList(product)
productList({
    productname: "Loyalty",
    price: 3**9
})

////////////////////////////////////////////////////////////

const myNewArray = [100, 200, 300, 444, 555, 666, 777, 888, 999, 000]

function getArray(array){
        return array[1]
}

// console.log(getArray(myNewArray));
console.log(getArray([100, 200, 300]));




