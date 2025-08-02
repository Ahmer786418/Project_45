/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for
the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
let car = 'subaru';
console.log("\n---> 5 test evaluate to true");
//test 1
console.log("Is car == 'subaru'? i predict true.");
console.log(car === 'subaru');
//test 2
console.log("Is car !='toyota'? i predict true.");
console.log(car !== 'toyota');
//test 3
console.log("Is the length of car>4 ? i predict true.");
console.log(car.length > 4);
//test 4
console.log("Is the length of car<=6 ? i predict true.");
console.log(car.length <= 6);
//test 5
console.log("Does car starts with s ? i predict true.");
console.log(car.startsWith('s'));
console.log("\n---> 5 test evaluate to false");
// test 1
console.log("Is car == 'honda'? i predict false.");
console.log(car === 'honda');
// test 2
console.log("Is car in uppercase ? i predict false.");
console.log(car.toUpperCase() === car);
// test 3
console.log("Is car == 'Subaru'? i predict false.");
console.log(car === 'Subaru');
// test 4
console.log("Is car == 'Audi'? i predict false.");
console.log(car === 'Audi');
//test 5
console.log("Is the length of car=== 7 ? i predict false.");
console.log(car.length === 7);
export {};
