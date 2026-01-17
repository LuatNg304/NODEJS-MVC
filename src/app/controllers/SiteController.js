const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose.js");
class SiteController {
  //GET /home
  index(req, res, next) {
    Course.find({})
      .then((docs) => {
        docs = multipleMongooseToObject(docs);

        //res.json(docs);
        res.render("home", { courses: docs });
      })
      .catch(next);
  }

  //[get] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
