const newsRouter = require("./news");
const stieRouter = require("./site");
const coursesRouter = require("./courses");

function routes(app) {

  app.use("/news", newsRouter);
  
  app.use("/courses", coursesRouter);
  
  app.use("/", stieRouter);

}

module.exports = routes;
