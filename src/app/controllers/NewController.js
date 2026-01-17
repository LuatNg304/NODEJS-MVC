class NewController {
  //GET /Sites
  index(req, res) {
    res.render("news");
  }

  //:slug
  show(req, res) {
    res.send("Sites detail");
  }
}

module.exports = new NewController();
