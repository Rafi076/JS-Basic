// singelton object ==>
const tinderUser1 = new Object() // {}

// *********************************************************************
// non singelton object ==>
const tinderUser = {} // {}
tinderUser.id = "1234"
tinderUser.name = "rafi"
tinderUser.email = "rafi@gmail.com"
tinderUser.isLogin = false
console.log(tinderUser)  //  { id: '1234', name: 'rafi', email: 'rafi@gmail.com', isLogin: false }

//  *********************************************************************
const mySymbol = Symbol();
const regularUser = {
    fullName :{
        userName:{
            firstName : "Mohiuddin",
            lastName : "RAfi",
            [mySymbol]: "key1"
        }
    }
}
console.log(regularUser.fullName.userName.lastName); // RAfi
console.log(regularUser.fullName.userName[mySymbol]) // key1

// **********************************************************************
const obj1 = {
    1:"string1", 2:"string2"
}
const obj2 = {
    3:"string3", 4:"string4"
}
 const allObj1 = Object.assign({}, obj1, obj2) 
 //here using {} --> (empty array) is good try. will garantee the object will combined. 
 //it mean {} is target and other obj are sorce and they will cobined i {}.
console.log(allObj1) // { '1': 'string1', '2': 'string2', '3': 'string3', '4': 'string4' }

console.log(allObj1===obj1) // false
console.log(allObj1===obj2) // false

// here if we dont use {} it mean obj1 is target and other is source. but the output will be same
const allObj2 = Object.assign(obj1, obj2) 
console.log(allObj2) // { '1': 'string1', '2': 'string2', '3': 'string3', '4': 'string4' }

console.log(allObj2===obj1) // true
console.log(allObj2===obj2) // false

// but the usefull combin we will use is -->
const allObjCombin = {...obj1,...obj2}
console.log(allObjCombin) // { '1': 'string1', '2': 'string2', '3': 'string3', '4': 'string4' }

// ***********************************************************************************
console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'email', 'isLogin' ] --> every key of tinderUser camed in array
console.log(Object.values(tinderUser)) // [ '1234', 'rafi', 'rafi@gmail.com', false ] --> every value of tinderUser camed in array
console.log(Object.entries(tinderUser)) // [ [ 'id', '1234' ], [ 'name', 'rafi' ], [ 'email', 'rafi@gmail.com' ], [ 'isLogin', false ]]
console.log(tinderUser.hasOwnProperty('id')) //true --> to check if any property is inside the object

// ***********************************************************************************
// array sof object -->
const User = [
   {
        name: "ouwero",
        id: "w2euh",
        email:"abcdef@gmail.com"
    },
    {
        name:"wejgh3",
        email:"jfg@gmail.com"
    }
]
console.log(User) // [ { name: 'ouwero', id: 'w2euh' }, { name: 'wejgh3', email: 'jfg@gmail.com' } ]
console.log(User[0].email) // abcdef@gmail.com
console.log(User[1].email) // jfg@gmail.com


// *************************************************************************
const course = {
    name:"js tutorial",
    price:"1000",
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor) // hitesh

const {courseInstructor: instructor} = course
console.log(instructor)  // hitesh

// ****************************************************************************
// JSON --> object fromat
{
    "name":"js tutorial",
    "price":"1000",
    "courseInstructor": "hitesh"

}

// API--> array format
[
    {

    },
    {
        
    }

]