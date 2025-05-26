//singleton
// constructor by singleton

//object literals

// Object.create
//symbol

const mySymbol = Symbol("key1");

const jsUser = {
  name: "rishabh",
  age: 16,
  "fullname": "Rishabh rajpurohit",
  [mySymbol] : "mykey1"
};

console.log(jsUser.age);
console.log(jsUser["name"]);
console.log(jsUser["fullname"])
console.log(jsUser[mySymbol]);

jsUser.greeting = function() {
  console.log("hello js user");
}

console.log(jsUser.greeting());