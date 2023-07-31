// models/index.js

const User = require("./user");
const Comment = require("./comment");
const Post = require("./post");

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Comment, Post };
