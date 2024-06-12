//exercise 1 
 
let number = 20;
let decimal = 0.5;
sum = number + decimal;
difference = number - decimal;
product = number * decimal;
quotient = number / decimal;
modulo = number%2;
exponent = number**2;
console.log('number:',number,
'float:', decimal,
'sum:', sum,
'difference:', difference,
'product:',product,
 'quotient:', quotient)
console.log('modulo:',modulo)
console.log('exponent:',exponent)

// exercise 2.1 Boolean and operators
let isGreater = number>=decimal
console.log(isGreater)
let isLess = number<decimal
console.log(isLess)
let isEqual = number==decimal
console.log(isEqual)

// exercise 2.2
let x = 8
let y = 12 
let isGtreator = x > y;
console.log("x is greater than y:",isGtreator)
let isLessthan = x <= y;
console.log("x is less than or qual to y:",isLessthan)
let isEqualTo = x == y;
console.log("x is equal to y:",isEqualTo)
let notEqualTo = x =! y;
console.log("x is not equal to y:",notEqualTo) 

// exercise 2.3
let a = true;
let b = false;
let andGate = a && b;
console.log("a AND b is:",andGate)
let orGate = a || b;
console.log("a OR b is:",orGate)
let notA = !a;
console.log("not a is:",notA)

// exercise 2.4
let p = 10;
p +=2;
console.log("p += 2 is:", p)
p -= 2;
console.log("p -= 2 is:",p)
p *= 2;
console.log("p *= 2 is:",p)
p /= 2;
console.log("p /=2 is:",p)
p %= 2;
console.log('p %=2 is:',p)

