// controllers/api/commentRoutes.js

const router = require("express").Router();
const auth = require("../../utils/auth");
const { Comment } = require("../../models");

router.post("/", auth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
