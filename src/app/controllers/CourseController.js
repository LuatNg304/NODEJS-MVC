const { mongooseToOBject } = require("../../util/mongoose.js");
const Course = require("../models/Course");
class CourseController {
  //:slug
  show(req, res,next) {

    //qyerry : dung querry.
    //thongo tin khong qua url thi params
    //post: thi qua body
    Course.findOne({slug : req.params.slug})
    .then(course =>{
      res.render('courses/show',{course : mongooseToOBject(course)})
      
    }).catch(next)
  }
  //:slug
  index(req, res) {
    res.send("Course ");
  }
}

module.exports = new CourseController();
