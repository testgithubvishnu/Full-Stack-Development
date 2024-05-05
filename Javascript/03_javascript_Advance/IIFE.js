//IIFE:
// To Avoid pollution due to global scope
(function abc() {
  console.log("Hello world");
})();

(function chai() {
  console.log("Hello world");
})();

(function one(name) {
  console.log(`my name is ${name}`);
})("Aman");
