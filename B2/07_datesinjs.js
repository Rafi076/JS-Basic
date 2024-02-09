// dates

let mydate = new Date();
console.log(mydate);// 2023-09-30T04:44:33.532Z
console.log(mydate.toDateString()); // Sat Sep 30 2023 *****
console.log(mydate.toString()); // Sat Sep 30 2023 10:47:17 GMT+0600 (Bangladesh Standard Time)
console.log(mydate.toTimeString()); // 10:48:08 GMT+0600 (Bangladesh Standard Time)
console.log(mydate.toLocaleString()); // 9/30/2023, 10:48:57 AM ****
console.log(mydate.toJSON()); // 2023-09-30T04:49:34.251Z

console.log(typeof mydate); //object

let createAnotherDate = new Date(2023,9,12); ///in js==> month start from 0 .  so Date(yr,mnth,day,hr,min)
console.log(createAnotherDate.toDateString()); // Thu Oct 12 2023

let createAnotherDateOne = new Date(2023,9,12,1,30);
console.log(createAnotherDateOne.toLocaleString()); // 10/12/2023, 1:30:00 AM


// time stamp ***********
let mytimeStamp = Date.now();
console.log(mytimeStamp); // time from 01 jan 1970 in milsec = 1696050255020. to converet 
// it to sec div by 1000 ****interview que****
console.log(Math.floor(Date.now()/1000)); //1696050808

let newdate = new Date();
console.log(newdate.getMonth())  // 8 ==> september
console.log(newdate.getDay()) // 6 ==> sat day. day start from:Monday!!*****
console.log(`The date is ${newdate.getDate()}th ${newdate.getMonth()} and the time is ${newdate.getHours()} AM`)
// The date is 30th 8 and the time is 11 AM
newdate.toLocaleString('default',{
    weekday:"long"
    
})