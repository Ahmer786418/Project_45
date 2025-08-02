/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

// if color is green then print the player just earned 5 points

// 1st version 

let   alien_Color:string = 'green';
if(alien_color === "green") {
    console.log("Congratulation! you just earned 5 points");
   
} else if (alien_color==="yellow"){
    console.log("Congratulation! you just earned 10 points");
    
}
 else{
    console.log("Congratulation! you just earned 15 points");
    
}


// 2nd version
  

let Alien_color  = 'yellow';
if(alien_color === "green") {
    console.log("Congratulation! you just earned 5 points");
} else if(alien_color==="yellow"){
    console.log("Congratulation! you just earned 10 points");
    
} 
else{
    console.log("Congratulation! you just earned 15 points");
    
}
// 3rd version

let alien_color  = 'red';
if(alien_color === "green") {
    console.log("Congratulation! you just earned 5 points");
} else if(alien_color==="yellow"){
    console.log("Congratulation! you just earned 10 points");
    
} 
else{
    console.log("Congratulation! you just earned 15 points");
    
}