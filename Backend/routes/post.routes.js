const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const { createPost, getPosts, toggleLike } = require("../controllers/post.controller");

router.post("/create", auth, createPost);
router.get("/", getPosts);
router.post("/like/:id", auth, toggleLike);

module.exports = router;
