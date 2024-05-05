// function abc(name) {
//   return `${name} just logged in`;
// }
// console.log(abc("Aman"));

//==============================================

// function abc(name = "sam") {
//   return `${name} just logged in`;
// }
// console.log(abc("pam"));
//sam is -> default value

//================================================================
//Rest operator:
// function abc(...item) {
//   return item;
// }
// console.log(abc(100, 200, 300, 400));

// Function and object:
// function abc(user) {
//   console.log(`my name is ${user.name} and my age is ${user.age}`);
// }
// abc({
//   name: "Aman",
//   age: 45,
// });

const age = [34, 56, 74, 28, 93];
function myage(user) {
  return user[2];
}
console.log(myage([23, 45, 67, 32]));
