// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         // console.log("5 is best number");
//     }
//     // console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     // console.log(`outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value: ${j}`);
//         // console.log(i + '*' + j + '=' + i*j);
//     }
//     }
    

let myarrey = ["one", "two", "three"]
// console.log(myarrey.length);
for (let ind = 0; ind < myarrey.length; ind++) {
    const element = myarrey[ind];
    // console.log(element);
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`dedect 5`);
//         break
//     }
//     console.log(`The value of Index is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`dedect 5`);
        continue
    }
    console.log(`The value of Index is ${index}`);
    
}