const marvel_heros  = ["iron man","spider man","thor"];
const dc_heros = ["super man","batman","flash"];
//marvel_heros.push(dc_heros)
//console.log(marvel_heros); // ['iron man', 'spider man', 'thor', [ 'super man', 'batman', 'flash' ]]
// here in marvel_heros array dc_heros added as array!but this is not proper way! we can access element by 
//console.log(marvel_heros[3][0]) // to access super man from array

// to add to array in js we use concat() function !!
//console.log(marvel_heros.concat(dc_heros)); // [ 'iron man', 'spider man', 'thor', 'super man', 'batman', 'flash' ]

// another way==>
const all_heros  = [...marvel_heros,...dc_heros];
console.log(all_heros) // [ 'iron man', 'spider man', 'thor', 'super man', 'batman', 'flash' ]
console.log(all_heros[3]) // super man

// => many array inside an array!!
const an_array = [1,2,3,[4,5],7,[8,9,[10,11],12],13]
const for_all_array = an_array.flat(Infinity);
console.log(for_all_array); // [1,2,3,4,5,7,8,9,10,11,12,13]
console.log(for_all_array[3]) // 4


console.log(Array.isArray("Rafi")) // false ==> to check if array
console.log(Array.from("Rafi xyz"))// [ 'R', 'a', 'f', 'i', ' ', 'x', 'y', 'z' ] ==> from() function convert everything in array inside " " .

// ******interesting ***interview
console.log(Array.from({name:"rafi"})); //[]  ==> here it couldnot convert "rafi" to array . keyword: name

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score3,score2));