const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  const comment = await Comment.create({
    text: req.body.text,
    post: req.params.postId,
    user: req.user.id
  });
  res.json(comment);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId });
  res.json(comments);
};
