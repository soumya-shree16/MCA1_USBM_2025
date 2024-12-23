const os=require("os");
const { log } = require("util");


console.log(os);

console.log(os.homedir());//c:\users\hp
console.log(os.hostname());//DESKTOP
console.log(os.platform());
console.log(os.release());
console.log(os.userInfo());
console.log(os.userInfo().username);
console.log(os.freemem()/1024);






