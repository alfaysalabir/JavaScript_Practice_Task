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
}
else {
    console.log(`${year} is not a leap year`);
}

console.log("===================")

// Take a speed variable. If speed is greater than 80, print "Overspeeding", otherwise print "Normal speed".
const speed = 85;

if (speed > 80) {
    console.log("Overspeeding");
}
else {
    console.log("Normal speed");
}

console.log("===================")

// Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).
const age = 24;
const hasTicket = true;

if (age > 18 && hasTicket) {
    console.log("Entry allowed");
}

console.log("===================")

// Using isWeekend and isHoliday, print "No work today" if either one is true (use ||).
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("No work today");
}

console.log("===================")

// Build a simple login system — print "Login successful" only if both username and password are correct.
const username = "admin";
const password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login successful")
}
else {
    console.log("Invalide username or password");
}

console.log("===================")

// Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.
const marks = 85;

if (marks >= 80) {
    console.log("Grade: A+");
}
else if (marks >= 70) {
    console.log("Grade: A");
}
else if (marks >= 60) {
    console.log("Grade: B");
}
else if (marks >= 50) {
    console.log("Grade: C");
}
else {
    console.log("Grade: F");
}

console.log("===================")

// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).
const bimi = 50;

if (bimi < 30) {
    console.log("Underweight");
}
else if (bimi < 40) {
    console.log("Normal");
}
else if (bimi < 60) {
    console.log("Overweight")
}
else {
    console.log("Obese");
}

console.log("===================")

// Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).
const month = 11;

if (month === 12 || month === 1 || month === 2) {
    console.log("Winter");
}
else if (month >= 3 && month <= 5) {
    console.log("Summer");
}
else if (month >= 6 && month <= 9) {
    console.log("Monsoon");
}
else if (month >= 10 && month <= 11) {
    console.log("Autumn");
}
else {
    console.log("Invalid month");
}

console.log("===================")

// Using age and hasID, use nested if-else to check whether someone is eligible to vote.
const voteAge = 24;
const hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Eligible to vote")
    }
    else {
        console.log("Not eligible to vote")
    }
}

console.log("===================")

// Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Admin Deshboard");
    }
    else {
        console.log("User Deshboard")
    }
}
else {
    console.log("Please Login")
}

console.log("===================")

// Determine whether a number is even or odd using the ternary operator.
const numberIs = 10;
const result = (numberIs % 2 === 0) ? "Even" : "Odd";

console.log(result);

console.log("===================")

// Using age, determine "Adult" or "Minor" using the ternary operator.
const ageIs = 24;
ageIs >= 18 ? console.log("Adult") : console.log("Minor");

console.log("===================")

// If the price is greater than 1000, print "Expensive", otherwise "Affordable" — write this using a ternary operator.
const price = 1400;
price >= 1000 ? console.log("Expensive") : console.log("Affordable");

console.log("===================")

// Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.
const hasPermission = false;

if (!hasPermission) {
    console.log("Access Denied")
}

console.log("===================")

// Using isOnline, use the NOT operator to print "User is offline".
const isOnline = false;

if (!isOnline) {
    console.log("User is offline");
}

console.log("===================")

// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.
const cartTotal = 1500;
const isMember = true;

if (cartTotal > 1000 && isMember) {
    const discount = cartTotal * 0.20;
    console.log("20% Discount Applied");
    console.log("Discount Amount:", discount);
    console.log("Final Total:", cartTotal - discount);
} else if (cartTotal > 1000) {
    const discount = cartTotal * 0.10;
    console.log("10% Discount Applied");
    console.log("Discount Amount:", discount);
    console.log("Final Total:", cartTotal - discount);
} else {
    console.log("No Discount");
    console.log("Final Total:", cartTotal);
}

console.log("===================")

// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).
const yourUsername = "admin";
const yourPassword = "12345";
const role = "admin"; // "admin" or "user"

if (yourUsername === "admin" && yourPassword === "12345") {
    console.log("Login Successful");

    if (role === "admin") {
        console.log("Welcome to the Admin Dashboard");
    } else if (role === "user") {
        console.log("Welcome to the User Dashboard");
    } else {
        console.log("Unknown Role");
    }

    const access = (role === "admin") ? "Full Access" : "Limited Access";
    console.log("Access Level:", access);

} else {
    console.log("Invalid Username or Password");
}