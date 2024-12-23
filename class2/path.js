const path=require("path");
const { log } = require("util");

console.log(path);

//rootdir
const rootDir=path.resolve(__dirname,"..");
console.log(rootDir);

//adding paths
console.log(path.join("class2","path.js"));
// console.log(path.basename());
// console.log(path.extname());
console.log(path.join(rootDir,"abd","xyz"));








