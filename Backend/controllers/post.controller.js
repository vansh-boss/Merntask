const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    content: req.body.content,
    user: req.user.id
  });
  res.json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "email");
  res.json(posts);
};

exports.toggleLike = async (req, res) => {
  const post = await Post.findById(req.params.id);
  const userId = req.user.id;

  if (post.likes.includes(userId)) {
    post.likes.pull(userId);
  } else {
    post.likes.push(userId);
  }

  await post.save();
  res.json(post);
};
