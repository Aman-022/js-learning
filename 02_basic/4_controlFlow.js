// if else ..... 
const temp = 40 

if (temp !== 40){
    console.log("no equal to 40")
} else console.log("temp is 40")

// <,> , <= ,>= , == ,!= ,=== ,!==

// switch ... 
const month =2; 
switch(month){
 case 1: 
    console.log("jan")
    break;
 case 2: 
    console.log("feb")
    break;     // if u didnt apply break , iske bad ka sara excecute hoga except default
 case 3: 
    console.log("march")
    break;
 default:
    console.log("case didnt match")
    break;
 }

// ######################################################################
// ====================== TRUTHY AND FALSE VALUES ======================
// ######################################################################

const email = []

if (email){       // should be string or value , but it excecute too 
   console.log(`email is : ${email}`)
} else console.log("please enter email")

// falsy value  (jis value pe false mana jayega) 
//  false , 0, -0, BigInt , 0n , "", null , undefined , Nan
  

// check array -> if (email.length ===0)-> empty 

// check object 
const obj = {}

if (Object.keys(obj).length === 0){
   console.log("empty object")
} else console.log(`your object : ${obj}`)


// NULLISH COALESCING OPERATOR (??)

let a 
a= 5 ?? 10 

// if value is not valid / null / undefined then t give the second value  (after ??) 
// after ?? we can write anything any fn , as per situation  
console.log(a)

c= null ?? 13 ?? 29 // only first value afte ?? will assign 
console.log(c)

// TERNIARY OPERATOR -> condn ? true : false 
const teaprice = 100 
teaprice >=80 ? console.log("expensive") : console.log("average")