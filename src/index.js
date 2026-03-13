const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

//connect to database
const db = require("./config/db");
db.connectToDatabase();

// 👇 BẮT BUỘC PHẢI CÓ
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//http logger đang để tạm ở production để test, sau này sẽ để ở development
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}
// app.use(morgan("combined"));

//template engine handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//route init
const route = require("./routes/index");
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
