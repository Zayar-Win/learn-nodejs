const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<p>Hello from express</p>");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
