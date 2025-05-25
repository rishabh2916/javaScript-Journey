const text = "My name is:";
const name = "Rishabh Rajpurohit";

//concatenation of string

const concatenation = text + name;
console.log(concatenation);

const coffee = 500;
const bagel = 300;
const total =  Math.round((coffee + bagel)/100);
const totalCostCoffee = "total cost of coffee $" + total;
console.log(totalCostCoffee);

//template string and interpolation

const sentence = `${text} ${name}`;
console.log(sentence);

// challenging Exercises 
const basketball = (2*2095) 
const basketballShipping = 499;
const tShirt = (2*799);
const tShirtShipping = 499;

const itemsCal = (basketball + tShirt) / 100;
console.log(`$${itemsCal}`);

const totalShipping = (basketballShipping + tShirtShipping) / 100;
console.log(`$${totalShipping}`);

const totalBeforeText = itemsCal + totalShipping;
console.log(`Total before tax: $${totalBeforeText}`);

const tax = totalBeforeText / 10;
const rounded = parseFloat(tax.toFixed(2));
console.log(`Estimated tax(10%): $${rounded}`);

const totalPrice = itemsCal + totalShipping + totalBeforeText + rounded;
console.log(`Order total: $${totalPrice}`);

//THESE IS ME

// basketball = (1*2095) 
// tShirt = (1*799); 

