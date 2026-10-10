const name = "aman"
const age = 20 

// better way to write  backtick -> option + ~
console.log(`my name is ${name} and age is ${age}`) 

// another way to decalre str

const gamename = new String('cricket')
console.log(gamename[2])

console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())

// TO SEE chat at particular POSTIOON 
console.log(gamename.charAt(4))
console.log(gamename.indexOf('t')) // char at position

const newstr =  gamename.substring(0,4)
console.log(newstr)

const str = gamename.slice(-10,4)
console.log(str)

// trim
const email = "    aman@gmail.com    "
console.log(email.trim())

// replace 
const url = "https:/am/an.com%20"
console.log(url.replace('%20', '_'))
console.log(url.includes('raj'))

// convert str into array , it can be split into on the any basis
console.log(url.split('/'))

// there are so many of fn/methdos 