const name = "rafi";
const age  = 23;

 //console.log(`hello my name is ${name}. im ${age} year old`); // ` ` ==> string interpolation

const newGame = new String('firstAndfurious') // index start from 0 index

console.log(newGame[0]); // print : f. 0 index of string

console.log(newGame.__proto__) // print: {}--> type of newGame!

console.log(newGame.length); // print: 15. lenght of string !

console.log(newGame.toLocaleUpperCase()) // convert to upper string note: here our orginal string didnt change
 // but the copy of orginal string converted to upper case.the reson discussed in stack!

console.log(newGame.charAt(3))// print the character at position. position 3 = s! 

console.log(newGame.indexOf('t')) // print the position of character t = 4

const newString = newGame.substring(2,5); /// print the string of index 2 to 4 (rst) /*********/
console.log(newString)

const anotherString = newGame.slice(-2,6); // slice function: it also work as substring function but can print from neg index
console.log(anotherString);

const anotherStringOne ="   clashOfcan  "; // print : clashOfcan skiping extra space!
console.log(anotherStringOne.trim())

const url = "https://rafi.com/SMmohiuddin%20rafi" //here in url browser can not understand white space, it replace by %20 
console.log(url.replace('%20',' '));// to remove scacific string from string and to 
//replace by another ==> like to remove %20 using replace function
console.log(url.includes('rafii'));//to find if scpacific key is inside the string

const letAstring = "fox-can-not-jump-high";  
console.log(letAstring.split('-')); // here '-' of string will erase and convert the string to array

const letAnotherstring = "fox can not jump high";
const word = letAnotherstring.split(' ');
console.log(letAnotherstring.split(' ') [1]); 


 /* some string type function : importent for interview ****
ƒ anchor()
ƒ at() 
ƒ big() 
ƒ blink()
ƒ bold()
ƒ charAt() 
ƒ charCodeAt()
ƒ codePointAt()
ƒ concat()
ƒ String()
ƒ endsWith()
ƒ fixed()
ƒ fontcolor()
ƒ fontsize()
ƒ includes()
ƒ indexOf()
ƒ isWellFormed()
ƒ italics()
ƒ lastIndexOf()
ƒ length()
ƒ link()
ƒ localeCompare()
ƒ match()
ƒ matchAll()
ƒ normalize()
ƒ padEnd()
ƒ padStart()
ƒ repeat()
ƒ replace()
ƒ replaceAll()
ƒ search()
ƒ slice()
ƒ small()
ƒ split()
ƒ startsWith()
ƒ strike()
ƒ sub()
ƒ substr()
ƒ substring()
ƒ sup()
ƒ toLocaleLowerCase()
ƒ toLocaleUpperCase()
ƒ toLowerCase()
ƒ toString()
ƒ toUpperCase()
ƒ toWellFormed()
ƒ trim()
ƒ trimEnd()
ƒ trimStart()
ƒ trimEnd()
ƒ trimStart()
ƒ valueOf()
Symbol(Symbol.iterator):  ƒ [Symbol.iterator]()

*/