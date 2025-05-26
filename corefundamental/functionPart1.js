

function sayMyName(){
  console.log("r");
  console.log('i');
}

sayMyName();

// function addTwoNumber(number1, number2){
//   console.log(number1 + number2);
// }
addTwoNumber(3, null)

function addTwoNumber(number1, number2){
  let result = number = number1 + number2;
  return result;
  
}

const result = addTwoNumber(3, 5)
// console.log("result: ", result)

function loginUserMessage(userName) {
  if(userName === undefined){
    console.log("please enter a username");
    return;
  }
  return `${userName} just logged in`
}

console.log(loginUserMessage("rishabh"));
console.log(loginUserMessage());
