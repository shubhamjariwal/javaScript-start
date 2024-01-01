const score = 222
console.log(score);
///////////////////////////////////////////
const balance = new Number(3333)
console.log(balance);
////////////////////////////////////////////

console.log(balance.toFixed(2).length);
////////////////////////////////////////////

const otherNumber = 111.52234
console.log(otherNumber.toPrecision(4));
/////////////////////////////////////////////

const hundred = 1000000
console.log(hundred.toLocaleString());


// ++++++++++++++++++ Maths ++++++++++++++++//

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.6));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));
console.log(Math.min(1,2,3,4,5,6,7,8,9));
console.log(Math.max(1,2,3,4,5,6,7,8,9));

///////////////////////////////////////////////////
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
/////////////////////////////////////////////////
const minScore = 10
const maxScore = 20

/////////////////////////////////////////////////
console.log(Math.abs(Math.floor(Math.random() * (minScore - maxScore + 1)) + 1) + minScore);       
/////////////////////////////////////////////////