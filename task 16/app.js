"use strict";
/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to
invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
let Guest_list = ["Ahmer", "Ubaid", "Ali"];
console.log("\nNEW LIST OF INVITATION :\n");
for (let j = 0; j < Guest_list.length; j++) {
    console.log(`Dear ${Guest_list[j]} : \n you are invited to dinner! \n `);
}
console.log("Good news we have found a bigger dinner table,so more space is available.so our new guest are :\n");
Guest_list.unshift("Zaheer");
Guest_list.splice(2, 0, "Zakir");
Guest_list.push("Zubair");
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n `);
}
