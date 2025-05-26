// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "1234abc";
tinderUser.name = "sakshi";

console.log(tinderUser)

const regularUser = {
  email: "rishabh rajpurohit",
  fullname: {
    userFullName : {
      firstName: "rishabh",
      lastName: "purohit"
    }
  }
};

console.log(regularUser.fullname.userFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1, obj2} => throwing error
// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = {...obj1, ...obj2};
console.log(obj4);

//Value from database user 

const user = [
  {
    id: 1,
    name: "rishabh",
    id: 2
  },
  {
    id: 3,
    id: 4,
  }
]

user[1].name;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
