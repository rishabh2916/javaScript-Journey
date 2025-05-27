// var c = 300;
let a = 300

if(true){
  // block scope
      let a = 10;
      const b = 20;
      // console.log("Inner: ", a)
      // var c = 30;
}

console.log(a);
// console.log(b);
// console.log(c);


function one() {
  const username = "rishabh";

  function two() {
  const website = "youtube";
  // console.log(username);
}
// console.log(website);

// two(); 

}
// one();

if(true) {
  const username = "rishabh"
  if(username === "rishabh") {
    const website = " youtube";
    // console.log(username + website)
  }
  // console.log(website);
}

// console.log(username);

// +++++++++++++++++ intersting +++++++++++++++++++

console.log(addone(5)); 

function addone(num){
  return num + 1;

}

const addTwo = function(num){
  return num + 2
}

console.log(addTwo(5));