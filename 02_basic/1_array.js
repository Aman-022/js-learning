const arr= ["aman",0,4,6,true]
arr.pop()
const myarr =[4,2,9,3,1]

myarr.push(8)
myarr.unshift(9)      // insert from start 

console.log("array:" ,myarr)

myarr.shift()  // remove from beg
console.log(myarr)

// other fn 
console.log(myarr.includes(0))
console.log(myarr.toSorted())

const newarr = myarr.join() //  joins all array elements into string
console.log(newarr)

//slice - return section of arr , splice -> also manipulate the arr

const arr1 = myarr.slice(1,4)
console.log("slice:" ,arr1 , "  origianl arr : ",myarr)

const arr2 = myarr.splice(1,4) // also includes 4th
console.log("splice:" ,arr2 , "  origianl arr : ",myarr)


const a = [1, 2];
const b = [4,9];
const c = [5, 6];

const result = a.concat(b, c);
console.log(result);               // [1, 2, 3, 4, 5, 6]

const result2 = [...a, ...b];
console.log(result2);             // [1, 2, 3, 4, 5, 6]


const d = [1, 2, [3, 4], 5, [19,32,[78,45]]];
const res = d.flat(Infinity);
console.log(res);

// convert into array 

console.log(Array.from("aman"))

console.log(Array.from({name:"aman"}))

let e = 6
let f =0
let y = 4
console.log(Array.of(e,f,y))