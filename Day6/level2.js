// EXERCISE: LEVEL2
// 1. Develop a small script which generate any number of characters random id:

const letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let result2 = ' ';

for ( let i = 0; i < 10; i++ ) {
    result2 += letters.charAt(Math.floor(Math.random() * letters.length));
}
console.log(result2);

// 2. Write a script which generates a random hexadecimal number.

const hex ="123456789ABCDEF"
let output=""
for(t=0; t<=7; t++){
    output += hex.charAt(Math.floor(Math.random()*hex.length))
}
console.log(output)

// 3. Write a script which generates a random rgb color number.

let r =   Math.floor(Math.random()*(255));
let g =   Math.floor(Math.random()*200);
let b =   Math.floor(Math.random()*255);

const colors = [r,g,b]

// for (d=0; d<5; d++){
 
// }

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
// 4. Using the above countries array, create the following new array.
let test = countries.toUpperCase
let news = []
for(c=0; c<countries.length; c++){
    
    news.push(countries[c].toUpperCase())
}
console.log(news)
// console.log(test)


// 5. Using the above countries array, 
// create an array for countries length'.
let train = []
for(l=0; l<countries.length; l++){

train.push(countries[l].length)
}
console.log(train)

// 6.Use the countries array to create
//  the following array of arrays:

let newCountry =[]


for(country of countries){
    newCountry.push(country,country.toUpperCase().slice(0,3),  country.length)

    console.log(newCountry)

}

// 7.In above countries array, check if there
//  is a country or countries containing the word 'land'.
//   If there are countries containing 'land',
//    print it as array. If there is no country containing the word 'land', 
// print 'All these countries are without land

const land =[]

for(t=0; t<countries.length; t++){
 if(countries[t].includes("land"))
 land.push(countries[t])
 
}
if(land.length>0){
    // console.log(land)
}
else{
    console.log("All these are countries without land")
}

// 8 In above countries array, check if there is a country 
// or countries end with a substring 'ia'. If there are countries 
// end with, print it as array. If there is no country containing 
// the word 'ai', print 'These are countries ends without ia'.

let ial = []
for(c=0; c<countries.length; c++){
    if(countries[c].includes("ia"))
    ial.push(countries[c])
}
if(ial.length>0)
// console.log(ial)
// else
console.log("These are countries that ends without ia",countries)


// 9.Using the above countries array,
//  find the country containing the biggest number of characters.
var amountOfLetters = 0;
var indexOfLongestname = 0;
var name = "";
for(var i = 0; i < countries.length; i++){
    if(countries[i].length > amountOfLetters){
        amountOfLetters = countries[i].length;
        indexOfLongestname = i;
        name = countries[i];
    }
}
// console.log(name)


// 10.Using the above countries array,
//  find the country containing only 5 characters.
let amount =0
let index =0
let five =[]
for(let j=0; j<countries.length; j++){
    if(countries[j].length<amount){
        amount = countries[j].length;
        index =j
        five.push(countries[j])
    }
}
// console.log(five)


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
// 11.  Find the longest word in the webTechs array

let weblong =0;
let indexweb = 0
let webTling = ""
for(let w = 0; w<webTechs.length; w++){
    if(webTechs.length >weblong){
        weblong = webTechs[w].length;
        indexweb= w
        webTling = webTechs[w]
    }
}
// console.log(webTling)


const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 13. An application created using MongoDB, Express,]
//  React and Node is called a MERN stack app. 
//  Create the acronym MERN by using the array mernStack
let stack =[]
for(country of mernStack){
    stack.push(country.slice(0,1))

}
console.log(stack.toString())

// 14. Printout webTechs

for(let p=0; p< webTechs.length;p++){   
}
console.log(webTechs)

// 16. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] 
// reverse the order using loop without using a reverse method.
const fruit= ["banana", "orange", "mango", "lemon"]

for(let f=fruit.length-1; f>=0; f--){
    console.log(fruit[f])
}

