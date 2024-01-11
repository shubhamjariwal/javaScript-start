//const fb_user = new Object()
const fb_user = {}

fb_user.id = "999"
fb_user.name = "Shubham"
fb_user.isLoggedIn = false

//console.log(fb_user);

////////////////////////////////////////////////

const regularUser = {
    email: "shubham@email.com",
    fullname: {
        userfullname: {
            firstname: "Shubham",
            lastname: "Jariwal"
        }
      
    },
    isLoggedIn: false,
}

//console.log(regularUser.fullname.userfullname.firstname);

/////////////////////////////////////////////////////

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}

//const obj3 = {...obj1, ...obj2}

const obj3 = Object.assign({}, obj1, obj2)

//console.log(obj3);

///////////////////////////////////////////////


const users = [
    {
        id: "1",
        email: "s@123"
    },
    {
        id: "1",
        email: "s@123"
    },
    {
        id: "1",
        email: "s@123"
    }
]

users[1].email

// console.log(fb_user);

// console.log(Object.keys(fb_user));

// console.log(Object.values(fb_user));

// console.log(Object.entries(fb_user));

// console.log(fb_user.hasOwnProperty(`isLoggedIn`));

///////////////////////////////////////////////////

const course = {
    coursename: "javaScript",
    price: "999",
    courseTeacher: "shubham"
}

//course.courseTeacher

const {courseTeacher} = course

const {courseTeacher: Teacher} = course

console.log(courseTeacher);
console.log(Teacher);

////////////////////////////////////////////////

// {
//     "name": "Shubham" , 
//     "coursename": "javaScript",
//     "price": "999"
// }

[
    {},
    {},
    {}
]



