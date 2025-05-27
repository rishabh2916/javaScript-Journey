(function chain() {
  console.log()
}) ();

//global scope pollution problem scope resolve
( (name) => {
  console.log(`db ${name}`);
}) ('rishabh');

(function name() { // function defination
  console.log('rishabh');
}) (); //parameter passing

((name) => {
  console.log(`these is my name: ${name}`)
}) ('rishabh rajpurohit');