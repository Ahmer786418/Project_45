"use strict";
//EXERCISE_38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should
// print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.
function describe_city(nameOfCity, country = "Pakistan") {
    return `${nameOfCity} is in ${country}`;
}
;
// 3 cities
console.log(describe_city("karachi"));
console.log(describe_city("hyderabad"));
console.log(describe_city("Rawalpindi"));
console.log(describe_city("Sargodha"));
