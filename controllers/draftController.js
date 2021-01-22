const db = require("../models");

// Defining methods for the MocksController
module.exports = {

  create: function (req, res) {
    db.Draft
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  get: function (req, res) {
    db.Draft
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
