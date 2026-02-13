const mongoose = require("mongoose");

const adminReplySchema = new mongoose.Schema({
  reply: String,
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("AdminReply", adminReplySchema);
