"use strict";
/*

Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
 actually have an empty list at the end of your program.
*/
// let Guest_list : string[] = ["Ahmer","Ubaid","Ali"];
// let i= 0;
// while(i <  Guest_list.length){
//         console.log(`Dear ${Guest_list[i]}:  \n you are invited to dinner! \n `)
// i++
// }
let guest_list = ["ali", "farhan", "Raza", "Ayesha"];
let not_present = 'farhan';
let new_guest = "Babar azam";
guest_list[1] = new_guest;
guest_list.unshift("shaheen", "sarfaraz", "rizwan");
console.log("\nUnfortunately we can't arrange big table,only two people are allow to sit on table.");
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry ${guest_list} you are not invited for dinner\n`);
}
for (let j = 0; j < guest_list.length; j++) {
    console.log('sir' + guest_list[j] + ' \nyes you are still invited on tomorrow dinner\nThank you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
