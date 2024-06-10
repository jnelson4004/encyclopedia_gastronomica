const router = require("express").Router();
const { createUser, getUsers, getSingleUser } = require("../../controllers/user.Controller");

// get all users
// /api/users/
router.route("/").get(getUsers)

// get one user
// /api/users/:userId
router.route("/:userId").get(getSingleUser);

// create a user
// /api/users/signup
router.route("/signup").post(createUser);

// login a user
// // /api/users/login
// // method loginUser does not exist
// router.route("/login").post(loginUser);

module.exports = router;