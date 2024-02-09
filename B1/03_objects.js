//singelton ==> when we create any constractor it singelton object ***


// object literals

const mySymbol = Symbol();

const jsUser = {  // we created an object {}
    name: "rafi",
    "full name":"mohiuddin rafi",
    age: 23,
    email: "mohiuddinrafi@gmail.com",
    [mySymbol]: "key1",
    city: "chittagong",
    loginHistory: ["MONDAY","FRIDAY","TUESDAY"],
}
console.log(jsUser.loginHistory); // [ 'MONDAY', 'FRIDAY', 'TUESDAY' ]

console.log(jsUser.email); // mohiuddinrafi@gmail.com
// ANOTHER way to accese string 
console.log(jsUser["email"]) // mohiuddinrafi@gmail.com
// we should know this to way of accesse string bcz==>
// 1. let create a key in object named(full name)
// 2. now if we want to acesse this full name ==>  console.log(jsUser.full name) we cant !!!
// 3. then we have to come to write like this-->
console.log(jsUser["full name"]); // mohiuddin rafi
// 4. **interview que: take a symbol and add in objects key and print it?
//     --> now let create a symbol before the object
//     --> then add it in objects
//     --> and print it
console.log(jsUser[mySymbol]) // key1
//     --> now it become a symbol

// to change value from object 
jsUser.name = "s m rafi";
//console.log(jsUser)
// to frezz an object ==>  Object.freeze(jsUser);


// function
jsUser.greeting = function(){
    console.log("hello js user ");
}
console.log(jsUser.greeting())  // hello js user

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this["full name"]}`);
    console.log(`${this["full name"]}'s email ${this.email} and symbol is ${this[mySymbol]}`);
}
console.log(jsUser.greetingTwo())
//  hello js user mohiuddin rafi
 // mohiuddin rafi's email mohiuddinrafi@gmail.com and symbol is key1