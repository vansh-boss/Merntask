const AdminReply = require("../models/AdminReply");

exports.reply = async (req, res) => {
  const reply = await AdminReply.create({
    reply: req.body.reply,
    comment: req.params.commentId,
    admin: req.user.id
  });
  res.json(reply);
};
