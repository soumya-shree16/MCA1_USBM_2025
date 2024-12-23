//while loop

// let num=1;
// console.log("glo",num);

// while(num<=10){
//     console.log("block",num);
//     num++;
// }

// console.log("global",num);

// //do-while loop
// //asking to the user for correct input

// let user;
// do{
//     user=prompt("what is the capital of odisha?")
    
// }while(user!=="Bhubaneswar"){
//     console.log("wrong guess");
    
//}

//for loop
 

//generate random number and add them upto 5 times


let sum=0;

for(let i=0;i<5;i++){
    let a=Math.floor(Math.random()*5);
 result=sum+a;

console.log(`the result is${result}`);
}

//nested loop

for(let i=1;i<=5;i++){
    for(let j=1;j<=2;j++){
        
        console.log(j);
        
        
        
    }

    console.log(i);
    
}
//pattern

for(let i=1;i<=5;i++){
    let pattern="";
    for(j=1;j<=i;j++){
        pattern += "*";
    }
    console.log(pattern);
    
}


