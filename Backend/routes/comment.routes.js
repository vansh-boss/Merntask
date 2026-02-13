const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const { addComment, getComments } = require("../controllers/comment.controller");

router.post("/:postId", auth, addComment);
router.get("/:postId", getComments);

module.exports = router;
