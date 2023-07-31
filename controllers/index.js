// controllers/index.js

const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const dashRoutes = require("./profileRoutes");
const apiRoutes = require("./api/");

router.use("/", homeRoutes);

router.use("/profile", dashRoutes);

router.use("/api", apiRoutes);

module.exports = router;
