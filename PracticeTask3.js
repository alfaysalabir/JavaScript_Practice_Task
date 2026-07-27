/* ********* Module 9: Fundamental Concepts of Loops ********* */

// Task 1 — Print "Hello" Five Times
// Write a for loop that prints "Hello" 5 times.
for (let i = 1; i <= 5; i++) {
    console.log("Hello");
}

console.log("===================")

// Task 2 — Print Numbers 1 to 10
// Write a for loop that prints numbers from 1 to 10.
for (let n = 1; n <= 10; n++) {
    console.log(n);
}

console.log("===================")

// Task 3 — Countdown with While Loop
// Write a while loop that prints numbers from 10 down to 1.
let number = 10;

while (number >= 1) {
    console.log(number);
    number--;
}

console.log("===================")

// Task 4 — Repeat a Message
// Using a while loop, print "Loop চলছে" exactly 7 times.

let running = 0;

while (running < 7) {
    console.log("loop Running");
    running++;
}

console.log("===================")

// Task 5 — Even Numbers
// Write a for loop that prints all even numbers between 1 and 30.
for (let even = 2; even <= 30; even = even + 2) {
    console.log(even);
}

console.log("===================")

// Task 6 — Sum of Numbers
// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.
let sum = 0;
for (let s = 1; s <= 20; s++) {
    sum = sum + s
}
console.log(sum);