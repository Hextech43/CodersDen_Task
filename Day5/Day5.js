// 1. Declare an empty array;
const start = []
// 2. Declare an array with more than 5 number of elements
const five = ["one", "tow", "three", "four", "five"]
// 3. Find the length of your array
console.log(five.length)
// 4.Get the first item, the middle item and the last item of the array
console.log(five[0])
const okay = Math.floor(five.length/2)
console.log(five[okay])
console.log(five[2])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find 
// the length of the array. The array size should be greater than 5

let mixedDataTypes = ["tree", 3,true, null, 4.56, "book" ]
console.log(mixedDataTypes.length)

// 6. Declare an array variable name itCompanies and assign initial values
//  Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]


// 7.Print the array using console.log()
console.log(companies)


// 8.Print the number of companies in the array
console.log(companies.length)

// 9. Print the first company, middle and last company
console.log( "number 9a:  " + companies[0])
const check = Math.floor(companies.length/2)
console.log( "number 9a:  " + companies[check])

console.log( "number 9c:  " + companies[companies.length-1])

// 11. Change each company name to 
// uppercase one by one and print them out
// const uppercased = companies.map(name => name.toUpperCase());
// console.log( "number 11:  " + uppercased)


// 12.Print the array like as a sentence:
console.log( "Nummber 12: "+ companies + " are big IT companies")

// 13. Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found
if(companies.indexOf("adanian")){
    console.log("its not found")
}else{
    console.log("its found")
}

// 14. Filter out companies which have more 
// than one 'o' without the filter method




let arr = []
if(companies[0].split("o").length>2){
    arr.push(companies[0])
}
console.log(arr)




// 15. Sort the array using sort() method
console.log(companies.sort())

// 17. Slice out the first 3 companies from the array
// companies.splice(0, 4)
console.log(companies)

// 18. Slice out the last 3 companies from the array
// companies.slice(-3)
console.log(companies)

//19.  Slice out the middle IT company or companies from the array

console.log(companies[Math.floor(companies.length/2)])

// 20. Remove the first IT company from the array
// companies.pop()
console.log(companies)

// 21. Remove the middle IT company or companies from the array
 const rigt= companies.splice(Math.floor(companies.length/2),1)
 console.log(rigt)
 console.log(companies)

//22.  Remove the last IT company from the array
let rem = companies.pop()
console.log(rem)
console.log(companies)

//23 Remove all IT companies
console.log(companies.splice(0))

// EXERCISE LEVEL2
// 2.First remove all the punctuations and change the string to array and count the number of words in the array



let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(" ")
console.log(words)

console.log(words.length)

// 3 In the following shopping cart add, remove, edit items


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
 shoppingCart.unshift("Meat")
console.log(shoppingCart)

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar")
console.log(shoppingCart)

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1)
console.log(shoppingCart)

// modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array i
// f it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
//   let checke = "Ethiopia"
// if(countries.indexOf(checke)===-1){
//     countries.push(checke)

// }else {
  
//     checke.toUpperCase()
// }
// console.log(countries)


let newItem =   'Ethiopia';


countries.indexOf(newItem) === -1 ? countries.push(newItem) : console.log("This item already exists");

console.log(countries)

//6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd + backEnd
console.log(fullStack.split(","))

// EXERCISE: LEVELTHREE
//1. DeclareThe following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)                             

