const marvel_heros = ["Thor", "iron man","Hulk"]
const dc_heros = ["Super_man", "Batman","Flash"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][2]);

//all_heros = marvel_heros.concat(dc_heros)

// const all_heros = [...marvel_heros, ...dc_heros]

// console.log(all_heros);
// console.log(all_heros[3]);

const array = [1,2,"3",[4,5,6,[7,8,9,[0]]]]

const real_array = array.flat(Infinity)

console.log(real_array);

 console.log(Array.isArray("shubham"));
 console.log(Array.from("shubham"));
 console.log(Array.from({name: "shubham"}));// Important


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));