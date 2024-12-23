//task-1
for(let i=1;i<=5;i++){
    let pattern="";
    for(j=1;j<=i;j++){
        pattern += "*";
    }
    console.log(pattern);
    
}

//task-2

for(let i=5;i>=1;i--){
    let pattern="";
    for(j=1;j<=i;j++){
        pattern += "*";
    }
    console.log("task-1 is:",pattern);
    
}

//task-3

for (let i=1;i<=5;i++){
    let pattern=" ";
    for(let j=1;j<=5-i;j++){
        pattern += " ";
    }
    for(let k=1;k<=(2*i-1);k++){
        pattern += "*";
    }
    console.log(pattern);
    
}
//task-4

for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=5-i;j++){
        pattern += " ";
    }
    for(let k=1;(k<=2*i-1);k++){
        pattern += "*";
    }
    console.log(pattern);
}

//lowerpart
for(let i=5-1;i>=1;i--){
    let pattern="";
    for(let j=1;j<=5-i;j++){
        pattern += " ";
    }
    for(let k=1;(k<=2*i-1);k++){
        pattern += "*";
    }
    console.log(pattern);

}   

//task-5

let totalRows = 5; // Number of rows
let totalCols = 5; // Number of columns

// Outer loop
for (let i = 1; i <= totalRows; i++) {
  let pattern = ""; // Initialize an empty string for each row

  // Inner loop
  for (let j = 1; j <= totalCols; j++) {
    // Check for boundary 
    if (i === 1 ||  i === totalRows || j === 1 || j === totalCols) {
      pattern += "*"; // Print star for boundary
    } else {
      pattern += " "; // for hollow part
    }
  }

  console.log(pattern);
}

