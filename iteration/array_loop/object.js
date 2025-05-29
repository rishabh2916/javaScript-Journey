const myObject = {
  js: 'javaScript',
  cpp: 'C++',
  rb: 'ruby',
  swift: "swift by apple"
};

for (const key in myObject) {
  console.log(`${key} for shortcut is for ${myObject[key]}`);
}

const programing = ['js', 'rb', 'py'];

for (const key in programing) {
  console.log(programing[key]);
}

