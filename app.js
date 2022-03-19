const express = require("express");

//express app
const app = express();

//listem for request
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", {
    root: __dirname,
  });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", {
    root: __dirname,
  });
});

//reidrect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404
//this middleware function run every request come in
//express route every render top to bottom
//so this 404 middleware must be the end of the route;
app.use((req, res) => {
  res
    .send(404)
    .sendFile("./views/404.html", {
      root: __dirname,
    });
});

app.listen(3000, () => {
  console.log("Server is Running");
});
