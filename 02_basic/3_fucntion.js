function addnum(a ,b){
    console.log(a+b)
}
function mulnum(a ,b){
    let ans = a*b
    return ans
}
addnum(6,4)

const res = mulnum(5,9)
console.log(res)

function logincheck (username){
    if (username===undefined) return "enter user name"
    return `${username} logged in`
}

console.log(logincheck())
console.log(logincheck("aman"))

// pass mutiple values 

function cartprice(... num){
    return num
}

function price(a,b,... num){ // first 2 num a , b rest -> num
    return num
}

console.log(cartprice(200,300,400,800))
console.log(price(200,300,400,800))

// PASS OBJECT IN FUNCTION 

const obj1 = {
    name:"himesh",
    age:93
}

function handleobj(anyobject){
    console.log(`username is ${anyobject.name} and age : ${anyobject.age}`)
}

handleobj(obj1)

// or we can also pass like this 

handleobj({name:"shyam", age :37})

// handle array 
const arr =[300,400,100,340,589]

function return2ndvalue(arr){
     return arr[1]
}

console.log(return2ndvalue(arr))



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ======================= GLOABAL AND LOCAL SCOPE ====================
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var c  = 90 
let b = 50
function check (){
    var c = 78         // only var can be re declared ->wrong 
     c=89
     b = b+1
   console.log(b," ", c) 
}
console.log(c)      // here c must be 90 but ans : 89 its wrong so dont declare var 
check()


function fn1 (){
    let z = 60 

    function fn2 (){
      let  j = 89
        console.log(z+3)
    }

   function fn3 (){
    // console.log(j+1)             cannot acces c 
   }
   fn2()     // call fn2
}
fn1()


const add2 = function(num){
      return num +2 
}

console.log(add2(8))


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ======================= THIS & ARROW FN ====================
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// this -> current context 

const user ={
    name :"rohan",
    salary :98732,
    welcomemsg: function(){
        console.log(`${this.name} how are you `)
        console.log(this)         // this refers to current context
    }
}
user.welcomemsg() 
user.name = "priyansh"      // name is changed
user.welcomemsg()