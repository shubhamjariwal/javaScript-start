let a = 100

if(true){
    let a = 10
    const b = 20
     //console.log("INNER:", a);  
}

// console.log(a);
// console.log(b);
// console.log(a);

function one(){
       const username = "shubham"
        function two(){
          const  website = "youtube"
          console.log(username);
        }
        //console.log(website);

        two()
}

// one()

if(true){
  const username = "shubham"
  if(username === "shubham"){
    const website = " youtube"
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

//////////////////////interesting/////////////////////////////
                
function addOne(num){
  return num + 1
}

addOne(5)

const addTwo = function(num){
  return num + 2
}

addTwo(5)



