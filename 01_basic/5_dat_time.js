// DATES  -> its a object 

let mydate = new Date()
console.log(mydate)
console.log(mydate.getFullYear())
console.log(mydate.toLocaleTimeString()) // there are so many of ways 

let mycreatedDate = new Date (2026,2,9,5,3) 
console.log(mycreatedDate.toLocaleString()) 

let anotherway = new Date("2026-11-4")
console.log(anotherway.toLocaleDateString())

let indianway = new Date("11-04-2026")
console.log(indianway.toLocaleDateString())
console.log(indianway.toLocaleTimeString())

// TIME STAMP , comapre always in ms
let mytimestamp = Date.now()
console.log(mytimestamp)    // it gives in millisecond

console.log(mytimestamp- mycreatedDate.getTime() )    // we cna compare the dates 

// convert in seconds
console.log(Math.floor(Date.now()/1000))

// Customized Date:
let newDate = new Date("2026-11-04");
console.log("Customized Date:");
console.log( newDate.toLocaleString("en-IN", {weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"}));