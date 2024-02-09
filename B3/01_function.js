function sayMyName(){
    console.log("R")
    console.log("a")
    console.log("f")
    console.log("i")
}
// sayMyName  --> reference
//   sayMyName() // R a f i --> execuition


//*************************************************************************
// ADD two number
// non return type function
function addtwoNUmber(num1,num2){ // num1, num2 --> parameter
    console.log(num1+num2);
}
addtwoNUmber(2,3) // 5 -->2,3 : argument
addtwoNUmber(2,"3") //23
const resultt = addtwoNUmber("3",4) //34
// -----> if no value is pass as argument in parameter result is UNDEFINED *******interview*********


// ***************************************************************************
// ADD two number
// return type function
function addtwoNUmberANDreturn(num1,num2){ // num1, num2 --> parameter
    return num1+num2;

}
console.log("result : ", addtwoNUmberANDreturn(12,43)) // result :  55


//****************************************************************************
function userLoginMSG(user,time){
  return `${user} just login at ${time}`  

}
console.log("login: ", userLoginMSG("Rafi", new Date().toLocaleString()))   // login:  Rafi just login at 10/6/2023, 9:47:20 PM


// *******************************************************************************
function userLoginMSG(user="RAFI"){
    return `${user} just login`  
  
  }
  console.log("login: ", userLoginMSG()) // login:  RAFI just login
  console.log("login: ", userLoginMSG("MOHIUDDIN")) // login:  MOHIUDDIN just login


// *****************************************************************************
function calculatecarateprice(...num){ // here --> ... mean to create array of price
    return num
}
console.log(calculatecarateprice(200,5000,1000)) //[ 200, 5000, 1000 ]


//********************************************************************************
function calculatecarateprice(value1,value2,...num){ // ***interview que
    return num
}
console.log(calculatecarateprice(200,5000,1000,100))  // [ 1000, 100 ]


// ********************************************************************************
const users = { //objects
    username: "rafi",
    age: "23"
}
function handelobject(anyobject){
    console.log(`username ${anyobject.username}.age ${anyobject.age}`)   // anyobject --> bcz to handel any object
}
//handelobject(users) // username rafi.age 23

// OR anotherway --> passing arguments using objects

handelobject({
    username:"rafi",
    age:"23"
}) // --->username rafi.age 23


// **********************************************************************************
// to access a value from array by function
const myarr = [200,100,300,7000,2500]
function valueofanyindex(element){
    return element[3]
}
console.log(valueofanyindex(myarr)) //7000

// OR anotherway -->
console.log(valueofanyindex([100,13,12,25,876]))
