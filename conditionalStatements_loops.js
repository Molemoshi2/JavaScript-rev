// exercise 1 temperatures
let temperature = prompt("enter a number for temperature")
if (temperature<0){
    console.log("It's freezing")
}
else if (temperature>=0 && temperature<=15) {
    console.log("It's cold")
}
else if (temperature>15 && temperature<=25){
    console.log("It's mild")
}
else {
    console.log("It's warm")
}

//exercise 2 using switch statemnts
let _temperature = prompt("enter a tempeature for switch")
switch(true){
    case _temperature<0:
        console.log("It's freezing")
        break;
    case _temperature>=0 && _temperature<=15:
        console.log("It's cold")
        break;
    case _temperature>15 && _temperature<=25:
        console.log("It's mild")
        break;
    case _temperature>25:
        console.log("It's warm")
        break;
}

//exercise 2.1 divisibility check
let _number = prompt("Kindly enter a number for diisibility check")
if (_number%2==0 && _number%3==0){
    console.log("Divisible by both")
}
else if (_number%2==0){
    console.log("divisible by 2")
}
else if (_number%3==0){
    console.log("Divisible by 3")
}
else{
    console.log("Not divisible by 2 or 3")
}

//exercise 2.2 using switch statements
let myNumber = prompt("enter a number for divisibility check using switch statement")
switch(true){
    case myNumber%2==0 && myNumber%3==0:
        console.log("Divisible by both")
        break;
    case myNumber%2==0:
        console.log("divisible by 2")
        break;
    case myNumber%3==0:
        console.log("Divisible by 3")
        break;
    case myNumber%2!=0 && myNumber%3!=0:
        console.log("Not divisible by 2 or 3")
        break;
}

// exercise 3 for loops


// 3.1 print numbrs from 1 to 10
let myArray = []
for(let i=1; i < 11; i++) {
    myArray.push(i)
}
console.log("Numbers from 1 to ten:",myArray)

// 3.2 print all even numbers between 1 and 2
let evenArray = []
for (let num=1; num<=20; num++){
    if (num%2==0){
        evenArray.push(num)  
    }
}
console.log("Even numbers between 1 and 20:",evenArray)

// 3.3 add numbers from 1 to 100
let total = 0;
for (let i=1; i<101; i++){
    total+=i;
}
console.log(total)

// print numbers of an array to the console
const myNumbers = [1,2,3,4,5]
for(let i =0; i <5;i++){
    console.log(myNumbers[i])
}


// 3.5 find and print the largest number
const numbers = [3,7,2,5,10,6]
let largestNumber = 0;
for (let i = 0; i<numbers.length+1; i++){
    if (largestNumber<numbers[i]){
        largestNumber=numbers[i]
    }  
}

console.log(largestNumber)

// exercise 4 while loops

//4.1 print numbers from 1 to 10
let num = 1;
let oneToten = []
while (num <= 10) {
    oneToten.push(num)
    num++;  
}
console.log(oneToten)

// 4.2 print even numbers from 1 to 20

let even_number = 1;
let evenNumberArray = []
while (even_number <= 20) {
  if (even_number % 2 === 0) {
    evenNumberArray.push(even_number)
  }
  even_number++;
}
console.log(evenNumberArray)

// 4.3 sum of all numbers from 1 to 100
let myTotal = 0;
let myNUM = 1
while(myNUM<=100){
    myTotal+=myNUM 
    myNUM++
}
console.log(myTotal)


//4.4 print all multiples of 5 lss than 50

let multipleNumber = 1
let multipleArray = []
while (multipleNumber<=50){
    if (multipleNumber%5==0){
        multipleArray.push(multipleNumber)
    }
    multipleNumber++
}
console.log(multipleArray)

// exercise 5 do while loops
//5.1
let number5 = 1;
let doWhileArray = []
do {
  doWhileArray.push(number5)
  number5++;
} while (number5 <= 10)
console.log(doWhileArray)

//5.2 add numbers from one to 100
let number52 = 1;
let sum52 = 0;

do {
  sum52 += number52;
  number52++;
} while (number52 <= 100)

console.log(sum52)
// 5.3 prompt the user to enter a number less than 10

do {
  var userInput = prompt("Enter a number greater than 10:")
} while (userInput <= 10 || isNaN(userInput))

console.log(userInput, "is valid thank you")

//5.4 guessing game

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;

do {
  userGuess = parseInt(prompt("Guess a number between 1 and 10:"))

  if (userGuess === secretNumber) {
    console.log("Congratulations! You guessed the correct number.")
  } else if (userGuess < secretNumber) {
    console.log("Too low, try again.")
  } else {
    console.log("Too high, try again.")
  }
} while (userGuess !== secretNumber)