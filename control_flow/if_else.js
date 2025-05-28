// if
// const isUserloggedIn = true;
// const temperature = 41
// if(temperature === 41) { //when condition is true then its execute
//   console.log("less than 50");
// } else {
//   console,log("temperature is greater than 50");
// }
// console.log("execute")

// 2 == 2 is only compare value
// 2 === 2 these is checked type of data type

const score = 200;

//scope concept
// if (score > 100) {
//   const power = "fly";
//   // console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

//shorthand notation
const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test 2") // not use these type of syntax

// if (balance < 500) {
//   console.log("less than")

// } else if (balance < 750) {
//   console.log("less than 750");

// } else {
//   console.log("less than 1250")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = true;

if(userLoggedIn && debitCard) {
  console.log("allow to buy course");

}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("user logged in");
}