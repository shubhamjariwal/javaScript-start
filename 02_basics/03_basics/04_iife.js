// Immediately Invoked Function Expressions (IIFE)

(function chai (){
    // NAMED IIFE
        console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
} )();

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
} )("Shubham")








