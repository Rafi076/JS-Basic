// console.log(2>1) // ture
// console.log(2<=1); // false


// *********** confusing comparision ***************

// console.log("02">1); // true! here "02" converted to number!
// console.log(1>"2"); // false

//  console.log(null > 0) // false
//  console.log(null == 0) // false
//  console.log(null >= 0) //true 

/* the reason is that the equality checker == and comparisions >,<,>=,<= work differently.
   comparision convert null to a number. treating as 0
   thats why null>=0 is true and null>0 is false!!*/

// also same for undefined
//  console.log(undefined > 0) // false
//  console.log(undefined == 0) // false
//  console.log(undefined >= 0) // false 


// === strict check
//console.log("2"===2); // false!   **here, === also check data type**