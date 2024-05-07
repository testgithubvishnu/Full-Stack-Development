// Function CallBack:
function doSomething(n) {
  console.log(n);
  n();
}
// Method 1:
doSomething(() => {
  console.log("demo");
});

// Method 2:
// doSomething(demo);

// function demo(){
//     console.log("I am demo");
// }

// Use of Callback function:

function getUserData(task) {
  let data = [3, 6, 5, 1];
  task(data);
}

getUserData(function (userdata) {
  console.log(userdata);
  // dom manipulation
});

getUserData(function (userdata) {
  console.log(userdata);
  // excel sheet generation
});
// According to use of data  everyone can call 'getuserdata'
// we can get data back
// you do your job and give data back

// Callback functions are functions that are called after the first function completes its task.

//They are often used to handle asynchronous events and make your code more readable.

//This can make your code more modular and understandable.
