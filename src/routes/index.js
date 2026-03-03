const newsRouter = require("./news");
const stieRouter = require("./site");

function routes(app) {

  app.use("/news", newsRouter);

  app.use("/", stieRouter);

}

module.exports = routes;
