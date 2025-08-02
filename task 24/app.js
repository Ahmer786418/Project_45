"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than
or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
let str1 = 'Ahmer';
let str2 = 'Abbasi';
let num1 = 5;
let num2 = 10;
let Arr = [1, 2, 3, 4, 5];
// test for equality & unequality with strings
console.log("test for equality & unequality with strings");
console.log(str1 === 'Ahmer');
console.log(str1 === str2);
// test using the lower case function
console.log("\n test using the lower case function");
console.log(str1.toLowerCase() === 'ahmer');
console.log(str2.toLocaleLowerCase() !== 'abbasi');
//Numerical test
console.log("\n Numerical test:");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !== 10);
//test for using "and" or "or" operators
console.log("\n test for using 'and' or 'or' operators");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num2 > 15));
//test wheather an item is an array
console.log("\n test wheather an item is an array");
console.log(Arr.includes(3));
console.log(Arr.includes(6));
//test wheather an item is not an array
console.log("\n test wheather an item is not an array");
console.log(!Arr.includes(6));
console.log(!Arr.includes(2));
