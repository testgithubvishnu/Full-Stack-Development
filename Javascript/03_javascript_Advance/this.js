const user = {
  name: "hitesh",
  age: 56,
  abc: function () {
    //console.log(`${this.name} ,welcome you`);
    console.log(this);
  },
};
// user.abc();
// user.name = "Aman";
// user.abc();
console.log(this);

function chai() {
  console.log(this);
}
chai();
// Gives lots of values
