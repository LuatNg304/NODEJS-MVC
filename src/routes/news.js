var express = require("express");
var router = express.Router();

const newController = require("../app/controllers/NewController");

// newController.index

router.get("/", newController.index);
router.get("/:slug", newController.show);

module.exports = router;
