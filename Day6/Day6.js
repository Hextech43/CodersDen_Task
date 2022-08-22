// EXERCISE LEVEL1
//1.  Iterate 0 to 10 using for loop, do the same using while and do while loop
let i=0
while (i<=10){
    // console.log(i)
    i++
}

let d=0
do{

    // console.log(d)

    d++
}while(d<=10)

//4. Write a loop that makes the following pattern using console.log():
let sum=""
for (let b=0; b<=6; b++){
    sum+="#"
    // console.log(sum)
}

// 5. Use loop to print the following pattern:
for(let c=0;c<=10; c++){
    // console.log(`${c} * ${c}=${c*c}`)
}
// 6.Using loop print the following pattern

for(let f=0; f<=10; f++ ){
    // console.log(`${f}  ${f**2} ${f**3}`)
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for(let g=0; g<=100; g++){
    let see = g%2==0
   if(see){
    //    console.log(g)
   } 
   
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let h=0; h<=100; h++){
    if(h%2==1){
        // console.log(h)
    }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
let hope = 100
for(let m=2; m<hope; m++){
    if(hope % m ===0 )
console.log(m)
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let add = 0
for(j=0; j<=100; j++)
add +=j
// console.log(add)

// 11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumE = 0
let sumO = 0
let arrE =[]

for (let i = 0; i <= 100; i++) {
if (i % 2 == 0) {
    sumE += i
  } else {
    sumO += i
  }
}
// console.log(`The sum of all evens from 0 to 100 is ${sumE}.
//  And the sum of all odds from 0 to 100 is ${sumO}.`)


// 12.Use for loop to iterate from 0 to 100 and print the sum of all
//  evens and the sum of all odds. Print sum of evens and sum of odds as array
 arrE.push(sumE, sumO)
// console.log(arrE)

//13.  Develop a small script which generate array of 5 random numbers
var myArray = [];
for (var k = 0, t=6; k <t; k++) {
  myArray.push(Math.floor(Math.random()*t));
//   console.log(myArray)
}

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
var arr = [];
while(arr.length < 6){
    var r = Math.floor(Math.random() * 100) + 1;

    if(arr.indexOf(r) === -1) arr.push(r);
}
// console.log(arr);


// 15. Develop a small script which generate a six characters random id:

const letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = ' ';

    for ( let i = 0; i < 9; i++ ) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
// console.log(result);



// EXERCISE: LEVEL2
// 1. Develop a small script which generate any number of characters random id:
let result2 = ' ';

for ( let i = 0; i < 10; i++ ) {
    result2 += letters.charAt(Math.floor(Math.random() * letters.length));
}
console.log(result2);

