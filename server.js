const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //set response header's content-type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      //you can write status code in response
      //100 - data response
      //200 - success
      //300 - move redirect
      //400 - user or client error
      //500 - server error
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      //u can redirect by setting location in response header
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      //to end the page loading
      res.end();
    }
    if (data) {
      //res.write(data);
      //if it a single data to send to client you can write in end method
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log(
    "Server is running on localhost:3000"
  );
});
