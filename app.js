const express = require("express");
const req = require("express/lib/request");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

//listem for request
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet:
        "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet:
        "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet:
        "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  //we can pass the data to ejs template from render's send parameter
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

//404
//this middleware function run every request come in
//express route every render top to bottom
//so this 404 middleware must be the end of the route;
app.use((req, res) => {
  res.render("404", { title: "404" });
});

app.listen(3000, () => {
  console.log("Server is Running");
});
