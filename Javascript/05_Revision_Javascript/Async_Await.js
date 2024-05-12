// Fetching APIs:

fetch("link")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

// Internally fetch contains promises

async function handleFetch() {
    try{
  let response = await fetch("https://api.github.com");
  let data=response.json();
  console.log(data);
    }
    catch(err) {
        console.error(err);
}

handleFetch();
console.log("end line hey");
// untill fetch not resolved it will wait
// best way to handle promises
