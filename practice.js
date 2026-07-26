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