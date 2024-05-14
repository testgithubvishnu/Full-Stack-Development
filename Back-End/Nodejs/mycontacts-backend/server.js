const express = require("express");
const app = express();
//const dotenv = require("dotenv").config();
//const port = process.env.PORT || 5000;
const port = 8000;

app.get("/api/contacts", (req, res) => {
  res.send("Get all contacts");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
