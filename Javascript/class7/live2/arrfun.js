//for
// let arr=["A","B","C","D","E"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
    
//}
//forEach
// arr.forEach(()=>{
//     arr.forEach((el,i)=>{
//         console.log(el,i);
        
//     });
// })

// //map
// newArr=arr.map((el)=>{
//   return((el.toLowerCase())) 
// })
// console.log(newArr);

//filter
let nums=[1,2,3,4,5,6,7,8];
let even=nums.filter((val)=>{
    return val%2==0;
})
console.log(even);

//obj
let std={
    name:"soumya",
    age:21,
    batch:"mca",
    clg:"usbm"
}

console.log(typeof(std));

//using object
const std1=new Object();
std1.name="sudhanshu";
std1.batch="mca";
std1.clg="usbm";

console.log(std1);

//Access
//bracket notation
//dot notation

console.log(std1["name"]);
console.log(std1.batch);

//modify element
console.log(std1.name="soumya");

//q:create an array object of 50 students









