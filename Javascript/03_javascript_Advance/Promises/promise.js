// const promiseOne = new Promise(function (resolve, reject) {
//   // Do asynch calls
//   // DB calls,cryptography,network
//   setTimeout(function () {
//     console.log("promise1 done");
//     resolve();
//   }, 2000);
// });
// promiseOne.then(function () {
//   console.log("promise consumed");
// });

//=======================================================================================
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("promise2 done");
//     resolve();
//   }, 2000);
// }).then(function () {
//   console.log("promise consumed");
// });

//=======================================================================================
// const promisethree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ name: "Amit", age: 45, email: "akshata@gmail.com" });
//   }, 2000);
// });
// promisethree.then(function (user) {
//   console.log(user);
// });
//=======================================================================================

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Akshata", age: 45, city: "latur" });
//     } else {
//       reject("Something went wrong !");
//     }
//   }, 2000);
// });

// const username = promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise is resolved or rejected");
//   });
//console.log(username);

//======================================================================================

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "javascript", password: "user" });
//     } else {
//       reject("Something went wrong !");
//     }
//   }, 2000);
// });
// async function consumeFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumeFive();

//=========================================================================================
// async function getAll() {
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Something went wrong");
//   }
// }
// getAll();

//================================================================
fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
