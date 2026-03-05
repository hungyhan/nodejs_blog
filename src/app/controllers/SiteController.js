const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");  

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
          // res.json(courses);
          res.render("home", { 
            // courses : courses.map(course => course.toObject())
            courses : multipleMongooseToObject(courses)
          });
      })
      .catch((err) => {
          next(err);
      });
    
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
