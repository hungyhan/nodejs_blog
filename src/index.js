const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

// 👇 BẮT BUỘC PHẢI CÓ
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//http logger
app.use(morgan("combined"));

//template engine handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//route init
const route = require("./routes/index");
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
