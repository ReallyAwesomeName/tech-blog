// controllers/homeRoutes.js

const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    // find post data if any
    const postData = await Post.findAll({
      include: [User],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
