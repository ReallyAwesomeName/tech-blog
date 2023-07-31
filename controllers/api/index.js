// controllers/api/index.js

const router = require("express").Router();
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");

router.use("/comments", commentRoutes);

router.use("/posts", postRoutes);

router.use("/users", userRoutes);

module.exports = router;
