let a = 100  // global

if(true){
    let a  = 10 // under scope 
    var b = 2
    const c = 5
    console.log(a) //10
    console.log(b) // 2
    console.log(c) // 5
}
console.log(a) // 100
console.log(b) // 2
console.log(c) // 50