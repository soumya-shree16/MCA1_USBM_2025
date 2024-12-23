// //task-1 calculator

const readline = require("readline");
// console.log(readline);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question=("enter the first number:",(num1) =>{
   
    rl.question=("enter the second number:",(num2) =>{
      rl.question("enter the operations (+, -, *, /)",(operation) =>{
        let result;

        switch(opertaion){

          case '+':
            console.log("the sum is:",num1+num2);
            break;
            case '-':
            console.log("the differnce is:",num1-num2);
            break;
            case '*':
            console.log("the multiplication is:",num1*num2);
            break;
            case '/':
            console.log("the division is:",num1/num2);
            break;
            default:
              console.log("invalid operation");
               
        }
        
        rl.question("press exit to stop",(exit)=>{
          rl.close()
        });
   });
});
});
      






                
                
                
            

        
