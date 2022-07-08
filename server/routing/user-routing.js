const express = require("express");
const router = express.Router();
const userController = require("./../controllers/user-controller");
const { auth } = require("./../authorization/auth");

router.route("/login").post(userController.login);

router
  .route("/adminpanel/users")
  .get(userController.getAllUsers)
  .post(userController.createUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
