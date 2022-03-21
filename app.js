const express = require("express");
const req = require("express/lib/request");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/Blog.js");
const blogRoutes = require("./routes/blogRoutes");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

const dbURI =
  "mongodb+srv://zayarwin:zayarwin@cluster0.kyr3d.mongodb.net/example-blogs?retryWrites=true&w=majority";

//connnecting to mongodb
mongoose.connect(dbURI);

//useing logger middle ware morgan
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
//to send the static file to browser we can use static middleware build in express
//by saying folder name that want to be send to browser
app.use(express.static("public"));

//a middleware is a function that work between req and res
app.use((req, res, next) => {
  console.log("i am middleware");
  //after console the middle ware doesn't whate does next do
  //so we can say hey go to the next by using next function
  next();
});

//listem for request

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
  //we can pass the data to ejs template from render's send parameter
});

app.use("/blogs", blogRoutes);

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
