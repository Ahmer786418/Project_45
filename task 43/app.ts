//EXERCISE 43
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
separate array. Call show_magicians() with each array to show that you have one array of the original names and 
one array with the Great added to each magician’s name.

*/
let magicians:string[]=["Alice","David","Chris"];
function show_magicians(magician: string[]) {
    let copyMagician = [...magician]
    // console.log("Magicians: ", magicians)
    // make_great()
    console.log("Magician: ", magician)
    return copyMagician
}
function make_great(magicians:string[]) : string[]
{
    let greatMagicians=[...magicians];
    magicians.forEach(magician =>  {
        greatMagicians.push(`${magician} the Great `);
    });
    return  greatMagicians;
}

let greatMagicians = make_great(magicians.slice());
console.log("Orinal magicians:");
show_magicians(magicians);// shows orignal magicians
console.log("great magicians");         
show_magicians(greatMagicians); //show modified names