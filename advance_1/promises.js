// fetch('https://somthjing.com').then().catch().finally

//promise creation
const promiseone = new Promise((resolve, reject) => {
  // do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log('task complete');
    resolve()
  },1000)
})

promiseone.then(() => {
  console.log("promise consumed");
  
})

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('task 2');
    resolve()
  }, 1000)
}).then(() => {
  console.log("2 resolved")
})

const promiseThird = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({username: "rishabh", email: "rishabh@gmail.com"})
  }, 1000)
})

promiseThird.then((user) => {
  console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if(!error) {
      resolve({username: "rishabh", password: "123"})
    } else {
      reject('ERROR: something went wrong')
    }
  },1000)
})

promiseFour
.then((user) => {
  console.log(user);
  return user.username;
}).then((username) => {
  console.log(username);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log(" the promise either resolved or rejected")
})

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if(!error) {
      resolve({username: "javaScript", password: "123"})
    } else {
      reject('ERROR: JS went wrong')
    }
  },1000)
})

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response); 
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://api.github.com/users/rishabh1916')
    
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

fetch('https://api.github.com/users/rishabh1916')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data)
})
.catch((error) => console.log(error));

// getAllUsers();