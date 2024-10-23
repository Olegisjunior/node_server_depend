const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const postRoutes = require("./routes/post-routes");
require("dotenv").config();
const contactRoutes = require("./routes/contact-routes");
const postApiRoutes = require("./routes/api-post-routes");
const createPath = require("./helpers/create-path");

const errorMsg = chalk.bgKeyword("white").redBright;
const successMsg = chalk.bgKeyword("green").white;

const app = express();

app.set("view engine", "ejs");

const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

mongoose
  .connect(URL) // , { useNewUrlParser: true, useUnifiedTopology: true }
  .then((res) => console.log(successMsg("Connected to DB")))
  .catch((err) => console.log(errorMsg(err)));

app.listen(PORT, (error) => {
  error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${PORT}`));
});

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.use(methodOverride("_method"));

app.use(postApiRoutes);

app.get("/", (req, res) => {
  //замість res.write/res.end() тут res.send()
  // sendFile - для передачі файлів
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use(postRoutes);
app.use(contactRoutes);

// все що знаходить після use() - не буде оброблятись
app.use((req, res) => {
  //  res.statusCode = 404; // можна так і так
  const title = "Error Page";
  res.status(404).render(createPath("error"), { title });
});

// GET - getting data
// POST - sending data
// DELETE - delete exist data
// PUT - Update existing data

// в експресс два параметри передаютсья перше роутинг (шлях) друге колбек функ

// app.use((req, res, next) => {
//   // ці міддлвари - грубо кажучи проміжуточні ПО,
//   // їх ставити треба перед роутами.. уважно дивитись де вони стоять, на порядок
//   console.log(`path: ${req.path}`);
//   console.log(`method: ${req.method}`);
//   next();
// });

// morgan - логгер мідлвейр
app.use(
  //топ штука для відлову помилок, та перегляду оптимізації
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
