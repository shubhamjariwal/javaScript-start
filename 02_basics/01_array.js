//////////////////// array //////////////////////

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Iron man", "hulk", "Thor"]
const myArr2 = new Array(5, 6, 2, true)

console.log(myArr[4]);
console.log(myArr2[3]);
console.log(myHeros[0]);

////////////////// Array Methods ///////////////

myArr.push(7)
myArr.push(8)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

console.log(myArr);

///////////////////////////////////////////////

const newArr = myArr.join()


console.log(myArr);
console.log(typeof myArr);

console.log(newArr);
console.log(typeof newArr);

//////////////////////////////////////////////

////////////// slice, splice //////////////////

console.log("A ", myArr);

const mna1 = myArr.slice(1, 3)

console.log("B ", mna1);

const mna2 = myArr.splice(1, 3)

console.log("C ", mna2);
console.log("D ", myArr);



