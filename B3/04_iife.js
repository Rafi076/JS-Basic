// immediately invoked function expression (IIFE) = the function which execute immediately also
// somtimes global scope poution accure so, whatever decleration or variable is this global scope to remove this we use IIFE

(function chai(){
    console.log(`BD connected `)
}) (); // BD connected **; must use**


// also we can write =>
( () => {
    console.log(`BD connected two `)
}) ();  // BD connected two

// to pass e veriable->
( (name) => {
  console.log(`BD connected ${name}`)
}) ("rafi"); 