//task-1

let start=1
let end=100
let total=(end-start)+1; //100
let random=Math.floor(Math.random()*total+start);
console.log(" a random number between 1 and 100:",random);

//task-2

let num1=6.75
console.log(Math.floor(num1));

//task-3
let num2=9.12
console.log(Math.ceil(num2));

//task-4
let a=5
let b=27
let num=(b-a)+1;

let d=Math.floor(Math.random()*num+a);
console.log("Generate a random number between 5 and 27:",d);

//task-5
let date=new Date();
let currentDate=(date.getDate());
let newDate=currentDate+5;
console.log(`the currentDate is ${currentDate} and the newDate is ${newDate}`);

//task-6
const da1=new Date("2023-01-01")
const da2=new Date();
milliSeconds=(da2-da1.getMilliseconds());
console.log(`the number of milliseconds between January 1, 2023, and today: ${milliSeconds}`);



//task-7
console.log(` the current hour:${date.getHours()}`);

//task-8
 const date1=new Date("2025-01-01");

console.log(`Given date:${date1.toDateString()}`);


//task-9
let day=new Date()
console.log(` the current day of the week:${day.getDay()}`);

//task-10
let month=new Date();
console.log(`the current month :${month.getMonth()}`);







