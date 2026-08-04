/* ********* Practice Tasks ********* */
// Beginner
/* 1. Create an array with 3 items of your choice.Log it.
    Expected: array with your 3 items printed */
const myArray = ['item1', 'item2', 'item3'];
console.log(myArray);

console.log("===================")

/* 2. Log the length of the array from Task 1.
Expected: 3 */
console.log(myArray.length);

console.log("===================")

/* 3. Log the item at index 0 and index 2 of the array. */
console.log(myArray[0]);
console.log(myArray[2]);

console.log("===================")

/* 4. Change the item at index 1 to a new value. Log the array. */
myArray[1] = 'newItem2';
console.log(myArray);

console.log("===================")

/* 5. Add one item to the end of the array. Log the array. */
myArray.push('item4');
console.log(myArray);

console.log("===================")

/* 6. Remove the last item from the array. Log the array and the removed value. */
const removedItem = myArray.pop();
console.log(myArray);
console.log(removedItem);

console.log("===================")

/* 7. Add one item to the start of the array. Log the array. */
myArray.unshift('item0');
console.log(myArray);

console.log("===================")

/* 8. Remove the first item from the array. Log the array and the removed value. */
const removedFirstItem = myArray.shift();
console.log(myArray);
console.log(removedFirstItem);

console.log("===================")

/* 9. Check whether the array contains a specific value. Log true or false. */
console.log(myArray.includes('item2'));

console.log("===================")

/* 10. Find the position of a specific value in the array. Log the number. */
console.log(myArray.indexOf('item2'));

console.log("===================")

/* 11. Loop through the array with a for loop and log each item. */
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log("===================")

/* 12. Loop through the array with a while loop and log each item. */
let j = 0;
while (j < myArray.length) {
    console.log(myArray[j]);
    j++;
}

console.log("===================")

// Intermediate
/* 1. Combine two arrays into one new array. Log the result. */
const secondArray = ['item5', 'item6', 'item7'];
const combinedArray = myArray.concat(secondArray);
console.log(combinedArray);

console.log("===================")

/* 2. Take a portion of an array (not the whole thing) without changing the original. Log the result. */
const portionArray = combinedArray.slice(2, 5);
console.log(portionArray);

console.log("===================")

/* 3. Turn an array of words into a single sentence string.
Expected: a string like "word word word" */
const sentence = combinedArray.join(" ");
console.log(sentence);

console.log("===================")

/* 4. Check two variables(one array, one not) and log whether each is an array.
Expected: true then false, or false then true depending on order */
const isArray1 = Array.isArray(myArray);
const isArray2 = Array.isArray("Not an array");
console.log(isArray1);
console.log(isArray2);

console.log("===================")

/* 5. Reverse an array of at least 5 items. Log the result. */
const myArray5 = ['item1', 'item2', 'item3', 'item4', 'item5'];
const reversedArray = myArray5.reverse();
console.log(reversedArray);

console.log("===================")

/* 6. Sort an array of names alphabetically. Log the result. */
const namesArray = ['Charlie', 'Alice', 'Bob'];
const sortedNames = namesArray.sort();
console.log(sortedNames);

console.log("===================")

/* 7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order). */
const numbersArray = [5, 3, 8, 1, 4];
const sortedNumbers = numbersArray.sort((a, b) => a - b);
console.log(sortedNumbers);

console.log("===================")

/* 8. Given an array of numbers, log only the values greater than 10, using a loop. */
const anotherNumbersArray = [12, 5, 18, 7, 10, 25];
for (let i = 0; i < anotherNumbersArray.length; i++) {
    if (anotherNumbersArray[i] > 10) {
        console.log(anotherNumbersArray[i]);
    }
}

console.log("===================")

/* 9. Given an array of numbers, calculate and log the total sum, using a loop. */
const yetAnotherNumbersArray = [12, 5, 18, 7, 10, 25];
let totalSum = 0;
for (let i = 0; i < yetAnotherNumbersArray.length; i++) {
    totalSum += yetAnotherNumbersArray[i];
}
console.log(totalSum);

console.log("===================")

// Advanced
/* 1. Given an array of numbers, remove duplicates and log the unique values only. */
const uniqueNumbers = [...new Set(yetAnotherNumbersArray)];
console.log(uniqueNumbers);

console.log("===================")

/* 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both. */
const mixedArray = [1, 'two', 3, 'four', 5];
const numbers = [];
const strings = [];
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number") {
        numbers.push(mixedArray[i]);
    } else {
        strings.push(mixedArray[i]);
    }
}
console.log(numbers);
console.log(strings);

console.log("===================")

/* 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop). */
let largest = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log("Largest:", largest);
console.log("Smallest:", smallest);

console.log("===================")

/* 4. Flatten a nested array (array containing arrays) into a single flat array.
Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]] */
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);

console.log("===================")

/* 5. Rotate an array left by one position (first item moves to the end). Log the result.
Expected: [2,3,4,5,1] from [1,2,3,4,5] */
const rotateArray = [1, 2, 3, 4, 5];
const rotated = rotateArray.slice(1).concat(rotateArray[0]);
console.log(rotated);