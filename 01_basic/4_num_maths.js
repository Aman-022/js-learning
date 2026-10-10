const score =400

const num = new Number(100)
console.log(score)
console.log(num)

console.log(num.toString())
console.log(num.toString().length)

console.log(num.toFixed(2)) // upto 2 decimal places 

const anothernum = 23.466
console.log(anothernum.toPrecision(3)) // upto 3 value (round of also)

const money = 10000000
console.log(money.toLocaleString('en-IN'))

// =============================== MATHS ===============================

console.log(Math.round(4.34)) 
console.log(Math.ceil(4.1))
console.log(Math.max(4,2,15,6,9))

// important 
console.log(Math.random())      // values always under 0,1

console.log((Math.random()*10) +1)   // b/w 1 and 10 , +1 for excluding 0

// specific range
const max = 50 
const min = 30 
console.log(Math.floor(Math.random()*(max-min+1))+min)