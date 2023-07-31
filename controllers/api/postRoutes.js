// controllers/api/postRoutes.js

const router = require("express").Router();
const { Post } = require("../../models/");
const auth = require("../../utils/auth");

router.post("/", auth, async (req, res) => {
  const postBody = req.body;
  try {
    const newPost = await Post.create({
      ...postBody,
      user_id: req.session.user_id,
    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const [rows] = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (rows >= 1) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
          attributes: {
            exclude: ["password"],
          },
        },
      ],
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const [rows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (rows >= 1) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
