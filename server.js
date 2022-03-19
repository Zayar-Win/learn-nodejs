const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //set response header's content-type
  res.setHeader("Content-Type", "text/html");
  fs.readFile(
    "./views/index.html",
    (err, data) => {
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
    }
  );
});

server.listen(3000, "localhost", () => {
  console.log(
    "Server is running on localhost:3000"
  );
});
