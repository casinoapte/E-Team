const router = require("express").Router();
const postRoutes = require("./post");
const draftRoutes = require("./drafts")

// post routes
router.use("/post", postRoutes);
router.use("/draft", draftRoutes)

module.exports = router;
