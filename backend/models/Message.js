const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  notebookId: mongoose.Schema.Types.ObjectId,
  text: String
});

module.exports = mongoose.model("Message", MessageSchema);
