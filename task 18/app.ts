/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/ 
 let favoutiteplaces : string [] = ['Makkah','Sawat','Muree','Paris','London']
 console.log('original :' + favoutiteplaces);
//  Print your array in alphabetical order without modifying the actual list.
 console.log('alphabetical order ' + [...favoutiteplaces].sort());

// // • Show that your array is still in its original order by printing it.
console.log('original :' + favoutiteplaces);

// // • Print your array in reverse alphabetical order without changing the order of the original list.
 console.log('reverse alphabetical order ' + [...favoutiteplaces].sort().reverse());

// // • Show that your array is still in its original order by printing it again.
 console.log('copy of reverse alphabetical order' + [...favoutiteplaces].sort().reverse());

// // • Reverse the order of your list. Print the array to show that its order has changed.
 console.log('reverse of upper order list:' + favoutiteplaces.sort());

// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
 console.log('original :' + favoutiteplaces.sort().reverse());