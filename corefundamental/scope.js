// var c = 300;
let a = 300

if(true){
  // block scope
      let a = 10;
      const b = 20;
      console.log("Inner: ", a)
      // var c = 30;
}

console.log(a);
// console.log(b);
// console.log(c);

