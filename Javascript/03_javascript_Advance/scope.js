// var a = 450;
// let b = 340;

// if (true) {
//   var a = 45;
//   let b = 34;
//   const c = 67;
// }
// console.log(a); // var scope is global
//console.log(b);
//console.log(c);

//========================================================
function one() {
  const name = "Hitesh";
  function two() {
    const age = 45;
    console.log(name);
  }
  //console.log(age);
  two();
}

one();
