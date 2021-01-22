const router = require("express").Router();
const draftController = require("../../controllers/draftController");

router.route("/")
    .post(draftController.create)
    .get(draftController.get)




module.exports = router;
