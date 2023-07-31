// controllers/api/userRoutes.js

const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.logged_in = true;
      res.json(user);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: "No account found" });
      return;
    }

    const passwordValid = user.checkPassword(req.body.password);
    if (!passwordValid) {
      console.log("number 2");
      res.status(400).json({ message: "No account found" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.logged_in = true;
      res.json({ user, message: "You have successfully logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No account found" });
  }
});

router.post("/logout", (req, res) => {
  try {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
