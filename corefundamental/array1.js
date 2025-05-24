const myArry = [1,2,3,4,5];
const myHeroes = ['shaltiman','spiders'];

const myArry2 = new Array(1,2,3,4)
console.log(myArry[0]);

// Array methods

myArry.push(6);
myArry.pop();

myArry.unshift(9);
myArry.shift();

console.log(myArry.includes(9));
console.log(myArry.indexOf(19));

const newArr = myArry.join();

console.log(newArr);
console.log(myArry);

//splice and slice methods

console.log("A", myArry);
const myn1 = myArry.slice(1, 3);

console.log(myn1);
console.log("B ", myArry);

const myn2 = myArry.splice(1, 3);
console.log("C", myArry);
console.log(myn2);


