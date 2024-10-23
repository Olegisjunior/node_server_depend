// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   console.log("Server request");
//   console.log(req.url, req.method);

//   res.setHeader("Content-Type", "text/html"); // "text/plain" application/json "text/html"

//   const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

//   let basePath = "";

//   switch (req.url) {
//     case "/":
//       basePath = createPath("index");
//       res.statusCode = 200;
//       break;
//     case "/about-us":
//       res.statusCode = 301;
//       res.setHeader("Location", "/contact");
//       res.end();
//       break;
//     case "/contact":
//       basePath = createPath("contact");
//       res.statusCode = 200;
//       break;
//     default:
//       basePath = createPath("error");
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(basePath, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.statusCode = 500;
//       res.end();
//     } else {
//       res.write(data);
//       res.statusCode = 200;
//       res.end();
//     }
//   });
// });

// server.listen(3000, "localhost", (error) => {
//   error ? console.log(error) : console.log(`listening port ${PORT}`);
// });
