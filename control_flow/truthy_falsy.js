const userEmail = "rishabh";

if(userEmail) {
  console.log("got user email");

} else {
  console.log("Don't have user email");
}

//falsy value
//false, 0, -0, BigInd 0n, "", null, undefined, NaN

//truthy value 
//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0) {
//   console.log("array is empty")
// }

const emptyObj = {};

if(Object.keys(emptyObj).length === 0) {
  console.log("empty compare"); 
}

//nullish coalescing operator (??) : ull undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

// val1 = null ?? 10 ?? 30

// console.log(val1);

// ********************* ternary operator ******************************

const ice = 100;
ice > 80 ? console.log("less than 80 ") : console.log("more than 80");