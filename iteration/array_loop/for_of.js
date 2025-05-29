// for of 

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = " hello world";
for (const greet of greetings) {
  console.log(`each char is ${greet}`);
}

// Maps => map don't contain duplicate key

const map = new Map();
map.set('IN', "India");
map.set('USA', "united states of america")

console.log(map);

for (const [key, value] of map) {
  console.log(key, ':-', value);
}

//object
const myObject = {
  'game': 'NFS',
  game2: 'spiderman'
}
//not working in object

// for (const [key, value] of myObject) {
//   console.log(key, value);
// }