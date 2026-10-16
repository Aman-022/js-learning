// HIGH ORDER LOOP 
// ---------------------- 1. FOR OF ----------------------
// syntax -> for (const element of object) {  }

const arr = [ 10,20,30,40]
for (const i of arr){
    console.log(i*2)
}
console.log("\n")

//  MAP -> {key,value} 
const map = new Map ()
map.set('IN',"india")
map.set('FR',"france")
map.set('PAK',"pakistan")

console.log(map)

for (const it of map){
    console.log(it)
}
console.log("\n")
for (const [key,value] of map){
    console.log(key,':-',value)
}

// object is not iterable bydefault (normally)
const obj = {
    first :"aman",
    last :"raj"
}
// for (const  [key,value] of obj) console.log(key,':-',value) -> not iterable 

console.log("\n")
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ---------------------- 2. FOR IN ----------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// # obj is iterable by forin loop

for(const key in obj){
    console.log(`${key} : ${obj[key]}`)
}

console.log("\n")
const prog = ["c","c++","java","js"]

// for of -> print the values 
for (const i of prog) console.log(i);
// for in -> print idx
for (const i in prog) console.log(i)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ------------------------- 3. FOR EACH ---------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("\n")
// name.foreach(callback function) , in callbakc fn -> name nahi hota 

prog.forEach(function(item){
    console.log(item)
})

// arrow fn
console.log("\n")
prog.forEach((item,index,arr)=> {
    console.log(item,index,arr)
})

console.log("\n")
// , we can also pass another function 
function printme (item){
    console.log("hey",item)
}

prog.forEach(printme)