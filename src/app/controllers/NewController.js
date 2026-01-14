class NewController {
  //GET /news
  index(req, res) {
    res.render("news");
  }

  //:slug
  show(req,res){
    res.send("news detail")
  }
}

module.exports = new NewController();
const newController = require("./NewController");
