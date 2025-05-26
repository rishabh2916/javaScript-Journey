

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

function calculateCartPrice(val1, val2, ...num1){
  return num1;
}
// ... it is rest operator and these is also spread operator
console.log(calculateCartPrice(200, 400, 500, 600,))

const user = {
  userName: "RISHA",
  price: 99
}

function handleObject(anyObject){
  console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user);
handleObject({
  userName:"sam",
  price: 399
})

const myNewArray = [200, 300, 400, 500];
function returnSecondValue(getArray){
  return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
