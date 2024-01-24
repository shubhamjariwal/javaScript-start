const user = {
     username: "Shubham",
    price: 999,

    welcomeMessage: function(){
            console.log(`${this.username}, Welcome to website`);
            console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Rohan"
// user.welcomeMessage()

// console.log(this);

// function heart(){
//     let username = "shubham"
//     console.log(this.username);
// }

// heart()

// const chai = function(){
//     let username = "shubham"
//     console.log(this.username);
// }

// chai()

const chai = () =>   {
    let username = "shubham"
    console.log(this.username);
}

// chai()

// const addTwoNum = (num1, num2) => {
//             return num1 + num2
// }

// const addTwoNum = (num1, num2) => num1 + num2

// const addTwoNum = (num1, num2) => (num1 + num2)

const addTwoNum = (num1, num2) => ({username: "Shubham"})


console.log(addTwoNum(4, 9));

