const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

//http logger
app.use(morgan("combined"));

//template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/resources/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
