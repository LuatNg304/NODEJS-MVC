const Course = require("../models/Course");
class CourseController {
  //:slug
  show(req, res,next) {
    Course.findOne({slug : req.params.slug})
    .then(course =>{
      res.render('courses/show')
    }).catch(next)
  }
  //:slug
  index(req, res) {
    res.send("Course ");
  }
}

module.exports = new CourseController();
