/*
In JavaScript, arrays aren't primitives but 
are instead Array objects with the following core characteristics:

1) JavaScript arrays are resizable and can contain a mix of different data types. 
   (When those characteristics are undesirable, use typed arrays instead.)

2) JavaScript arrays are not associative arrays and so, 
  array elements cannot be accessed using arbitrary strings as indexes, but must be 
  accessed using nonnegative integers (or their respective string form) as indexes.

3) JavaScript arrays are zero-indexed: the first element of an array is at index 0, 
   the second is at index 1, and so on — and the last element is at the value of the 
   array's length property minus 1.JavaScript array-copy operations create shallow 
   copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, 
    rather than deep copies). 
 */

const myArray = ["rafi",1,232,"o28"]
console.log(myArray[3]); //o28

const anotherArray = new Array("rafi",1,232,"o28",7,"abcd",9)
console.log(anotherArray[0]); // rafi

anotherArray.push("12132@")
console.log(anotherArray); // [ 'rafi', 1, 232, 'o28',,7,"abcd",9 '12132@' ]

anotherArray.pop();
console.log(anotherArray); // [ 'rafi', 1, 232, 'o28',7,"abcd",9 ]

anotherArray.unshift("js");
console.log(anotherArray); // [ 'js' 'rafi', 1, 232, 'o28',7,"abcd",9 ] // unshift(item) function insert item in front

anotherArray.shift();
console.log(anotherArray); // [ 'rafi', 1, 232, 'o28',7,"abcd",9 ] // to remove unshifted item!!**

console.log(anotherArray.includes(75)); // fasle!! to find if the item is present in array!!
console.log(anotherArray.indexOf(75)); // -1. that mean 75 is not in array!

const newArray = anotherArray.join();
console.log(anotherArray); // [ 'rafi', 1, 232, 'o28',7,"abcd",9 ]
console.log(newArray); // rafi,1,232,o28,7,abcd,9 ==> here it autometicaslly converted to string!
console.log(typeof newArray) // string***


// slice splice
console.log("A ",anotherArray) // A  [ 'rafi', 1, 232, 'o28', 7, 'abcd', 9 ]

const mynArray1 = anotherArray.slice(1,3); // slice
console.log("B ",anotherArray)  // B  [ 'rafi', 1, 232, 'o28', 7, 'abcd', 9 ](orginal array unchanged)
console.log("slice ",mynArray1); // [ 1, 232 ] : slice output less then 1 from range(1,2).***but dosent efect on orginal array
console.log("B ",anotherArray)  // B  [ 'rafi', 1, 232, 'o28', 7, 'abcd', 9 ](orginal array unchanged)

const mynArray2 = anotherArray.splice(1,3); // splice
console.log("C ",anotherArray) // C  [ 'rafi', 7, 'abcd', 9 ](orginal array changed)
// ***here index 1-3 deleted.so, splice efect on orginal array
console.log("splice ",mynArray2); // [ 1, 232, 'o28' ] will cut from orginal array
