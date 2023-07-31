// models/user.js

const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/config");

class User extends Model {
  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "User",
  }
);

async function hashPassword(user) {
  user.password = await bcrypt.hash(user.password, 10);
  return user;
}

module.exports = User;
