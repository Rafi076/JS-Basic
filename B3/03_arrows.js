const user = {
    usernmame : "Rfai",
    price : 999,

    welcomeMassage: function(){
        console.log(`${this.usernmame}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMassage();
/*
Rfai, welcome to website
{
  usernmame: 'Rfai',
  price: 999,
  welcomeMassage: [Function: welcomeMassage]
}
 */
user.usernmame = "arif"
user.welcomeMassage();
/*
arif, welcome to website
{
  usernmame: 'arif',
  price: 999,
  welcomeMassage: [Function: welcomeMassage]
}
 */

//console.log(this); // {}

//*********************************
// function chai(){
//     let username="edfjn"
//     console.log(this.username)
// }
// chai(); // here we can not use this. like this

// ****************************** not like this too
//  const chai = function(){
//     let username="edfjn"
//     console.log(this.username)
//  }
//  chai()

 //********************************
 // right way
  const chai = () => {
    let username="mohiuddin rfi"
    console.log(username)
  }
  chai() // mohiuddin rafi

  // *******************************
  const addtwo = (num1,num2) => {
    return num1+num2;
  }
  console.log(addtwo(3,4)) //7

  //*********************************
  const addtwox = (num1x,num2x) => num1x+num2x
  console.log(addtwox(3,4))  // 7

  // ************************************
  // to return a object -->
  const printName = () => ({
    username: "Rafi"
  });
  console.log(printName());