const { use } = require("react")

// object literals  - {key , value}
const mysym = Symbol("key1")    

const users ={name :"aman", 
              "fullname": "aman raj",
              age: 18 , 
              [mysym]:"newkey",            // use symbol as key 
              location : "delhi" , 
              email :"aman@gmail.com",
              isloggedin : false , 
              role:["web","analyst"]
}

console.log(users.email , " ", users["email"])

// users.fullname -> cannot access like this 

console.log(users["fullname"]," ", users[mysym])
Object.freeze(users)                  // lock 

users.name="raj"

console.log(users.name) 

// we can also add the function  in object but not after the lock 

users.greeting = function () {
    console.log(`hey ${users.name}`);
};
// users.greeting();  since users is locked cannot add 

const info ={
    name :"aman",
    age :20
}

info.greeting = function () {
    console.log(`hey ${info.name}`);
    console.log(`your age is :${this.age}`);

};
info.greeting(); 


// ++++++++++++++++++++++++++ OBJECT CONSTRUCTOR ++++++++++++++++++++++++++++

const instauser = new Object()      // empty object 

instauser.id = "8337e"
instauser.name = "vikas"
instauser.isactive = true 

const reg_user = {
    email:"aditya@gmail.com",
    address: {
        city :"delhi ",
        state :"delhi"
    }, 
    fullname:{        // nested object 
        first : "aditya",
        last :"raj"
    }, 
    age:19
}

console.log(reg_user.address)
console.log(reg_user.fullname.first)

const obj1 = {1:"a ", 2:"b",3:"c"}
const obj2 = {4:"l ", 5:"d",6:"i"}

// merge object 

const obj3 = {obj1,obj2} 
console.log(obj3)

// or const obj3 = object.assign ({},obj1,obj2)

const obj4 = Object.assign (obj1,obj2)
console.log(obj4)

// or more better 

const obj5 = {...obj1,...obj2}
console.log(obj5)


// very important -> get keys , values , entries ->array in array 
console.log(Object.keys(instauser)) 
console.log(Object.values(instauser)) 
console.log(Object.entries(instauser)) 
console.log(instauser.hasOwnProperty('gender'))


//######################## DESTRUCTURING of object ###########################

const course ={
    name :"js",
    price:"100",
    courseinstructor :"ramu"
}

// rename or destructure the keys , 

const{courseinstructor:teacher} = course 
console.log(teacher)
