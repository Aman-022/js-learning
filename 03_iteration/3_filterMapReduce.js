// for each -> do not return any value 

const num = [1,2,3,4,5,6,7,8,9]
const value = num.forEach((item)=> {
    return item
});   

console.log(value)        // undefined 

// FILTER -> it also return the values
const newnum = num.filter((item)=> item >=5)
console.log(newnum)

// if we want this by foreach we have to push the items in new array 

const arr=[]
num.forEach((item) => {
    if (item>=5) arr.push(item)
})
console.log(arr)

// ++++++++++++++++++++ EXAMPLE ++++++++++++++++++++++
console.log("\n")
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

const historyb = books.filter((bk)=> bk.genre === 'History')
console.log(historyb)

// CHAINING ->  multiple functions 
console.log("\n")
const res = num. map((i)=>i*10)    // multply by 10
               . map((j)=>j+5)     // +5
               .filter((n)=> n>=60)    // filter >=60

console.log(res)


// REDUCE 
const array = [1,2,4,5]
// 0+1+2+4+5
// cuurentvalue-> it refers to current elemt of array 
// accumulator -> start with intial value and result adds to accumuor 

const initialvalue =0;
const sumwithintital = array.reduce( 
    (accumulator , currentvalue) => accumulator + currentvalue ,initialvalue
)
console.log(sumwithintital)

const intial = 1; 
const product = array.reduce(
    (acc,current) => acc*current, intial
)
console.log(product)