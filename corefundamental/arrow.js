const user = {
  username: "rishabh",
  prince: 99,

  //this keyword refer current context 

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

console.log(this)

// function chai() {
//   let username = "rishabh";
//   console.log(this.username);
// }
// chai()

// const chai = function () {
//   let username = "rishabh";
//   console.log(this.username);
// }
// chai()

const chai = () => {
  let username = "rishabh";
  console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2); //implixit return we don't use return keyword in () bracket

const addTwo = (num1, num2) => ({username: "hitesh"}); 

console.log(addTwo(3,4));