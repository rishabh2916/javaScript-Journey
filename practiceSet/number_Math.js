//Amazon cart product

const toaster = 1899;
const basketball = 8899;
const tShirt = 499;
const shipping = 499;

//cost of the product before shipping 
const productTotal = (toaster + basketball + tShirt) / 100;
// console.log(total);

//calculate the total before tax 

const afterShipping =((toaster + basketball + tShirt + shipping) / 100);
console.log(afterShipping);

const taxIncluded = (10 / 100); //=> 10% = 0.1
console.log(Math.round(afterShipping + taxIncluded));

//ceiling and floor value
console.log(Math.floor(2.6));
console.log(Math.ceil(2.6));

//challenge Exercises 
//convert temperature for celsius to fahrenheit
// formula = fahrenheit = (celcius * 9 / 5) + 32;
//formula = celcius (Fahrenheit - 32) * 5 / 9;

const celcius = 25;
const calFahrenheit = (celcius * 9 / 5) + 32;
console.log(calFahrenheit);

const fahrenheit = 86;
const calCelcius = (fahrenheit - 32) * 5 / 9;
console.log(calCelcius);

