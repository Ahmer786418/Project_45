/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.
*/
const personName = "aHmEr aBBASi";

 console.log(`Name in Uppercase : ${personName.toUpperCase()}`);
 console.log(`Name in Lowercase : ${personName.toLowerCase()}`);
 
// // for title case

//  let step1 = personName.split(' ');

// let step2 = step1.map(word => word.charAt(0).toUpperCase() +  word. substr(1).toLowerCase());

// let step3 = step2.join(' ');

// console.log(`Name in title case : ${step3}`);

//  console.log(step2)

let title_case = personName[0].toUpperCase() + personName.slice(1).toLowerCase();
console.log("titleCase:"+ title_case);


