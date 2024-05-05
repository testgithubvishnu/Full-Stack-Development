async function xyz() {
  let raw = await fetch(`www.google.com`);
  let ans = await raw.json();
  console.log(ans);
}
// Already in json format
// No need of .then
// Need to wait for async code

// Without async and await:
function xyz() {
  fetch(`www.google.com`)
    .then(function (raw) {
      return raw.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
// data wiil be in raw format
