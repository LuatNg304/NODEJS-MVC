const Course = require('../models/Course');

class SiteController {
    //GET /home
    index(req, res) {
        Course.find({})
            .then((docs) => {
                res.json(docs);
            })
            .catch((err) => {
                res.status(400).json({ error: err.message });
            });
    }

    //[get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
