/* actuly data type are divided in 2 type 

1. premetive datatype: 7 type
   string,number,BigInt,boolean,symbol,null,undefined

const score = 100
const scoreValue = 100.3

const isLogin = false;
const outSideTemp = null;
let emailId 

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId); /// false 

const number = 12455523542345232352355543n //autometicly converted to bigInt
console.log(number);






2. reference (non premative): 3 type
   array, function, object

const array = ["rafi","uddin","mohi"];  //array!
//console.log(array);   // [ 'rafi', 'uddin', 'mohi' ]

let myObject = {
   name: "rafi",
   age: 23,
}     // object
//console.log(myObject);   // { name: 'rafi', age: 23 }

const myFunction = function(){
   console.log("Hello World");   
}        // function 
console.log(typeof myFunction);   /// function
   


**Que : is JS dynamicly typed or staticly typed language ??

ans: JavaScript is a dynamically typed language, which means that
data types of variables are determined by the value they hold at runtime and
can change throughout the program as we assign different values to them.

*/


// ****************************************************************************************************

/* stack (primative),                     heap (Non-primative) 
==> in stack we get copy of value         ==>in heap we get orginal reference of value    */

let myName = "Mohin Uddin";
let newName = myName;
newName = "Mohiuddin Rafi"

//console.log(myName)  // Mohin Uddin
//console.log(newName)  // Mohiuddin Rafi

let userOne = {
   email: "rafi@gmail.com",
   upi: "xyz"
}

let userTwo = userOne;
userTwo.email = "mohiudinrafi076@gmail.com";

console.log(userTwo.email)  //  mohiudinrafi076@gmail.com
console.log(userOne.email)  // mohiudinrafi076@gmail.com



