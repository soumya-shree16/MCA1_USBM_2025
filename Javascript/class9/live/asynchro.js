// //Synchronous
// console.log("start");
// console.log("midddle");
// console.log("end");

// //Asynchronous
// console.log("start");
// setTimeout(()=>console.log("middle"),2000);
// console.log("end");


//fetch
const url="https://jsonplaceholder.typicode.com/users";
// fetch(url)
//    .then((res)=>res.json())
//    .then((res)=>console.log(res))
//    .catch((error)=>console.log(error));


  async function fetchData(){
       try{
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        
       }
       catch(error){
        console.log(error);
        
       }
   }

   fetchData();






