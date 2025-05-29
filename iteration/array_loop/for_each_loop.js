const coding = ['js', 'ruby', 'java', 'python'];

// coding.forEach( function (item) {
//   console.log(item);
// } );

// coding.forEach( (value) => {
//   console.log(value);
// } );

// function printMe (item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//   console.log(item, index, arr);
// })

const myCoding = [
  {
    languageName: 'javaScript',
    languageFileName: 'js'
  },
  {
    languageName: 'java',
    languageFileName: 'java'
  },
] 

myCoding.forEach( (items) => {
  console.log(items.languageName);
} );