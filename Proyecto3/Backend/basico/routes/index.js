var express = require("express");
var router = express.Router();
var initModels = require("../models/init-models");
const sequelize = require("../models/index.js").sequelize;

var models = initModels(sequelize);
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/organizacions", function (req, res, next) {
  models.organizacions
    .findAll({})
    .then((org) => {
      res.json(org);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/organizacions/:id", function (req, res, next) {
  models.organizacions
    .findAll({ where: { raza: req.params.id } })
    .then((org) => {
      res.json(org);
    });
});

module.exports = router;
