const name = "rishabh rajpurohit";
const repoCount = 50;

//console.log(name + repoCount + "Value") this is not use in moder string concanation

//string in backtick ``
console.log(`hello my name rishabh ${name} and my repo count is ${repoCount}`);

const gameName = new String('rishabh');

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newSringOne = "   rishabh";
console.log(newSringOne);
console.log(newSringOne.trim());

const url = "https://rishabh.com";

console.log(url.replace('.'))