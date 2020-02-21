/*
// Explisit
const { myFunction,myVariable} = require("../utils")

myFunction()
console.log(myVariable);
*/

// Implisit

const utils=require("../utils")

utils.myFunction2()
utils.myVariable1=5
console.log(utils.myVariable1);
