let practice = "JavaScript Practice";
console.log(practice);

const js = "JavaScript";
console.log(js);

let numbers = 575928;
console.log(numbers);

console.log("===================")

/* ********* Boolean ********* */
const isPython = false;
console.log(isPython);

const isJS = true;
console.log(isJS);

/* ********* Type of JS Data ********* */
const practiceJs = true;
console.log(typeof practiceJs);

const myName = "Faysal";
console.log(typeof myName);

const myRoll = 575928;
console.log(typeof myRoll);

console.log("===================")

/* ********* Sum ********* */
const chicken = 250;
const beef = 800;
const totalPrice = chicken + beef;
console.log(totalPrice);

console.log("===================")

/* ********* Chrange Type ******** */
const stringNumber = "50";
const number = parseInt(stringNumber);
console.log(number);
console.log(typeof number);

const stringNum = "20.5";
const num = parseFloat(stringNum);
console.log(num);
console.log(typeof num);

console.log("===================")

/* ********* JavaScript Condition ********* */
const a = 10;
const b = 7;

console.log(a > b);
console.log(a < b);
console.log(a === b);
console.log(a >= b);
console.log(a <= b);
console.log(a !== b);

console.log("===================")

/* ********* JavaScript IF ELSE ********* */
if (true) {
    console.log("Inside the Condition")
}

if (false) {
    console.log("Inside the Condition")
}

const fare = 20;
if (fare < 50) {
    console.log("Go ahed");
    console.log("I will go");
}
else {
    console.log("not right fare");
    console.log("I will not going");
}

console.log("===================")

/* ********* JavaScript Multiple Conditions ********* */
const salary = 50000;
const hasHouse = true;
const hasCar = true;

if (salary >= 50000 && hasHouse === true && hasCar) {
    console.log("Rich Man");
}
else {
    console.log("Poor Man");
}

if (salary > 75000 || hasHouse === true || hasCar === true) {
    console.log("Very Rich Man");
}
else {
    console.log("Very Poor Man");
}

console.log("===================")

/* ********* JavaScript Grade ********* */
const marks = 75;

if (marks > 80) {
    console.log("A+")
}
else if (marks > 70) {
    console.log("A-")
}
else if (marks > 60) {
    console.log("B")
}
else if (marks > 50) {
    console.log("C")
}
else if (marks > 40) {
    console.log("D")
}
else {
    console.log("F")
}

console.log("===================")

/* ********* JavaScript Discount ********* */
const totalAmount = 5000;

if (totalAmount > 5000) {
    const discount = 30;
    const discountAmount = (totalAmount / 100) * discount;
    const payment = totalAmount - discountAmount;
    console.log("Total Pay:", payment);
}
else if (totalAmount > 1000) {
    const discount = 10;
    const discountAmount = (totalAmount / 100) * discount;
    const payment = totalAmount - discountAmount;
    console.log("Total Pay:", payment);
}

console.log("===================")

/* ********* JavaScript Nasted Condition ********** */
const money = 800;

if (money > 500) {
    console.log("Rich man");

    if (money > 1000) {
        console.log("Too rich man");

        if (money > 5000) {
            console.log("More rich man");
        }
        else {
            console.log("Normal man");
        }
    }
}
else {
    console.log("Poor man");
}

const age = 24;
const nidCard = false;

if (age >= 18) {
    if (nidCard) {
        console.log("Will not be able to vote")
    }
    else {
        console.log("Need NID card for vote")
    }
}

console.log("===================")

/* ********* JavaScript Ternary ********* */
const yourAge = 20;

yourAge >= 18 ? console.log("Able to vote") : console.log("Need NID card");

let price = 500;
const vipPerson = true;

price = vipPerson ? 0 : price + 100

console.log("Price is: ", price)

console.log("===================")

/* ********* JavaScript Not ********* */
const isLoggedIn = false;

/*
if (!isLoggedIn) {
    console.log("Please login first")
}
*/

if (isLoggedIn === true) {
    console.log("Add your comment")
}
else {
    console.log("Please login first")
}

console.log("===================")

/* ********* JavaScript Value ********* */
const valueNumber = 100;

if (valueNumber) {
    console.log("Number is truthy")
}

console.log("===================")

/* ********* JavaScript Loop ********* */
let count = 0;
count < 10;
count++;
console.log("JavaScript Loop");

for (let count = 0; count < 10; count++) {
    console.log("JavaScript for loop")
}

for (let i = 0; i < 11; i++) {
    console.log("JavaScript for loop: ", i);
}

/* let counts = 500;
while (counts < 515) {
    console.log("JavaScript while loop", counts);
    count++;
} */

let I = 400;
while (I < 115) {
    console.log("JavaScript while loop", I);
    I++;
}

for (let ii = 0; ii <= 10; ii++) {
    console.log(ii);
}

for (let ii = 0; ii <= 10; ii = ii + 2) {
    console.log(ii);
}

let sum = 0;
for (let iii = 0; iii <= 10; iii++) {
    sum = sum + iii;
    console.log(iii, sum);
}

for (let d = 10; d >= 0; d--) {
    console.log(d);
}

console.log("Count Down Start");
for (c = 5; c >= 0; c--) {
    console.log(c);
}
console.log("Count Down End");

const tableNum = 3;

for (let n = 1; n <= 10; n++) {
    console.log(tableNum, "X", n, " = ", n * tableNum);
}

for (let b = 0; b <= 10; b++) {
    if (b > 5) {
        break;
    }
    console.log(b);
}

let counts = 0;
while (counts < 10) {
    if (counts > 5) {
        console.log("Break")
    }
    console.log("Number:", counts);
    counts++;
}
console.log("After Break");

for (let c = 0; c <= 10; c++) {
    if (c === 2) {
        continue;
    }
    console.log(c);
}

let d = 0;
do {
    console.log(d);
    d++
}
while (d < 5)

    console.log("===================")

/* ********* JavaScript Array ********* */
const fruits = ["Mango", "Banana", "Lychee", "Apple"];
const totalFruits = fruits.length;
console.log(totalFruits);
console.log(fruits);

const players = ["Musfiq", "Riyad", "Shoikot"];
console.log(players.length);
const player1 = players[0];
console.log(player1);
console.log(players[2]);
console.log(players[players.length -1]);
players[1] = "Mustafiz";
console.log(players);

console.log("===================")

/* ********* JavaScript Push Pop ********* */
const numberes = [10, 20, 30, 40, 50];
console.log(numberes);
numberes.push(60, 70, 80);
console.log(numberes);

const amimal = ["Cow", "Monkey", "Elephent", "Bird"];
console.log(amimal);
amimal.pop();
console.log(amimal);
const firstAnimal = amimal.shift();
const lastAnimal = amimal.pop();
console.log(firstAnimal, lastAnimal);

console.log("===================")

/* ********* JavaScript Shift Unshift ********* */
const items = ["Mouse", "Keyboard", "Monitor", "SSD"];
items.shift();
console.log(items);
items.unshift("Printer");
console.log(items);

console.log("===================")

/* ********* JavaScript Includes ********* */
const includeNum = [10, 20, 30, 40, 50];
const includeNum1 = [60, 70, 80, 90, 100];
const isInclude = includeNum.includes(30);
console.log(isInclude);

const includeNumber = includeNum.concat(includeNum1);
console.log(includeNumber);

const numbs = [10, 20, 30, 40, 50];
const isNumbInclude = numbs.join(",");
console.log(isNumbInclude);

const position = numbs.indexOf(30);
console.log(position);

console.log(typeof numbs);
console.log(Array.isArray(numbs));

const nums = [10, 20, 30, 40, 50];
nums.slice(1, 4);
console.log(nums);

console.log("===================")

/* ********* JavaScript For Of Loop ********* */
const forNum = [10, 20, 30, 40, 50];
for (const num of forNum) {
    console.log(num);
}

console.log("===================")

/* ********* JavaScript String Comparison */
const str1 = "Hello";
const str2 = "hello";
console.log(str1.toLowerCase());

if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("Strings are equal");
}
else {
    console.log("Strings are not equal");
}