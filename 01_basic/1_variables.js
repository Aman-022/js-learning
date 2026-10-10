const { type } = require("express/lib/response")

const accountID = 2204 
let accountEmail = "officalaman180@gmail.com"   // string 
var accountPasswod = "amanraj"

accountcity = " delhi"

// accountID = 2  - > not allowed

accountEmail = "aman@gmail.com"
accountPasswod ="aman"
accountcity = "jaipur"
console.log(accountID);

let name ;
// print all variable in tabular form 

console.table([accountID , accountEmail , accountPasswod , accountcity, name]);

"use strict" // treat all js code as newer version 

// alert(3+3) -> error becz we r usig nodejs not browser 

let num = 3                  // integer range -> 2^53 , bigINT -> more larger 
let isactive = true        //bool
console.log(3+num)

// DATATYPES ->

// null -> represent empty value 
//undefined -> not defined 
// symbol -> for uiqueness 

// object 

console.log(typeof(num))
console.log(typeof(null))