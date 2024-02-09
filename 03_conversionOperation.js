let score = "33abc";
//console.log(typeof score); // now it is a string, if score=undefined then the conversion result will be Nan!!

let valueInNumber = Number(score)
//console.log(valueInNumber); // here we convert it to number. if show NaN(Not a Number) then cannot convert to Number


let scor = null;
//console.log(typeof scor); // now it is object type

let valuInNumber = Number(scor)
//console.log(valuInNumber);  // here it will show 0

// if score = true then conversion will be 1
// if score = false then conversion will be 0

//  "33"=>33
//  "33abc"=>NaN
//  true=>1, flase=>0

let isLoggin = 1;

let booleanIsLoggin = Boolean(isLoggin);
//console.log(booleanIsLoggin);  // here the conversion of 1 is true

// 1=> true, 0=> false
// " "=>false;
// "rafi"=> true 

let someNumber = 32;
//let numberToString = String(someNumber);

//console.log(numberToString) // now it convert to string ans=33! but type string!!

// ************* Operation **************

let number = 3
let negValue = -number
//  console.log(negValue); // -3
//  console.log(2*2);
//  console.log(4/2);
//  console.log(3**2); // 3^2 = 9
//  console.log(2%3); // 2

// console.log("1"+2+2); // 122 =>
// console.log("3"+"4"); // 34=>
// console.log(2+"4"); // 24
// console.log(6+2+"4"); // 84
// console.log("6"+2+4); // 624
// console.log(2+"4"+"6"+8+1); // 24681

// console.log(true); // true 
// console.log(+true); // 1
// console.log(+""); // 0



