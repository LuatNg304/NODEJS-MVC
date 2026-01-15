const Course = require("../models/Course");
const { multi } = require("../../util/mongoose.js");
class SiteController {
  //GET /home
  index(req, res) {
    Course.find({})
      .then((docs) => {
        docs = multi(docs);
        //res.json(docs);
        res.render("home", { courses: docs });
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  }

  //[get] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
