// CONVERT TO NUMBERS

let value = "33"
console.log(Number(value)) // print 33 but 33abc -> nan 

let val ="33ab"
console.log(Number(val))

// CONVERT TO BOOLEAN 
let st =""
console.log(Boolean(st))

// emoty string -> false , 0->f , 1->t
// non empty str -> true 

console.log("1"+2+3)
console.log(true)                  // true 
console.log(+true)                // 1

// operations

// console.log("02">1)       -> T
// console.log(null == 0)   -> F
// console.log(null > 0).   -> F
// console.log(null >= 0)     ->T

 console.log(undefined == 0)
 console.log(undefined > 0)
 console.log(undefined < 0)

 console.log(2==="2")     // triple eq to also check the datatype

 const id = Symbol('124')
 const antoherid = Symbol('124')
  console.log(id==antoherid)      


// ARRAY OBJECTS FUNCTION

const arr =["aman", "raj", "022"]

let obj = {
    name : "AMAN", 
    age : 22
}

const fn = function(){
    console.log("hellow world");
}
console.log(typeof(fn))

//  https://262.ecma-international.org/5.1/#sec-11.4.3


// ******************************************************************************

// MEMORY 

// stack (premitive) , heap is used for (NON premitive)
// whenever stack mem is used , we get the copy of declared value 
// heap -> we get the reference 

let name = " aman "
let another_name = name
another_name = "raj"

console.log(another_name )
console.log(name) // name is still same 

let user = {
    email : "aman@gmail.com",
    upi : "gpay.com"
}

let user2 = user 
user2.email="amanraj@gmail.com"

console.log(user.email) // orginal value is changed as its a non primitive dt 