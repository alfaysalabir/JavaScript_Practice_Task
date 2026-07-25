/* ********* Module 8: Conditionals & Decision Making — Practice Tasks ********* */

// Take two variables price1 and price2, and compare them using all comparison operators (==, ===, !=, !==, >, <, >=, <=), printing each result with console.log.
const price1 = 300;
const price2 = 500;

console.log(price1 == price2);
console.log(price1 === price2);
console.log(price1 != price2);
console.log(price1 == price2);
console.log(price1 !== price2);
console.log(price1 > price2);
console.log(price1 < price2);
console.log(price1 >= price2);
console.log(price1 <= price2);

console.log("===================")

// Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess.
console.log("5" == 5);
console.log("5" === 5);

console.log("===================")

// Create a variable isRaining (true/false). If it is true, print "Take an umbrella".
const isRaining = true;

if (isRaining) {
    console.log("Take an umbrella");
}

console.log("===================")

// Take a variable stock. If stock is 0, print "Out of stock" (use only if, no else).
const stock = 0;

if (stock === 0) {
    console.log("Out of stock");
}

console.log("===================")

// Take a number variable and check whether it is positive or negative (using if-else).
const number = -50;

if (number >= 0) {
    console.log("Positive");
}
else {
    console.log("Negetive");
}

console.log("===================")

// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).
const year = 2024;

if (year % 4 === 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}

console.log("===================")