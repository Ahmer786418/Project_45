// EXERCISE 45
/*Cars: Write a function that stores information about a car in a Object. The function should 
always receive a manufacturer and a model name. It should then accept an arbitrary number of
 keyword arguments. Call the function with the required information and two other name-value
 pairs, such as a color or an optional feature. Print the Object that’s returned to make sure 
all the information was stored   correctly.
*/
function make_car(manufacture:string, model : string, ...options:[string,any][]): object{
    let car ={manufacture,model};
    console.log("car: ", car) 
    console.log("options: ", options) 
    options.forEach((value: any) => {
        car[value[0]] = value[1]
        // console.log("key: ", key) 
        // console.log("value: ", value) 
        // car[key] = value
});
    console.log("car2: ", car) 
     return car;
}


console.log(make_car("Toyota","Corolla",["color","red"],["year",2020]));
console.log(make_car("Ford","Fiesta",["color","blue"],["sunroof",true]));;
