const router = require("express").Router();
const { createComment, getSingleComment, getComments } = require("../../controllers/comments.Controller");

// get all comments
// /api/comments
router.route("/").get(getComments);

// get one comment
// /api/comments/:commentId
router.route("/:commentId").get(getSingleComment);

// create a comment
// /api/comments/newComment
router.route("/newComment").post(createComment);

module.exports = router;