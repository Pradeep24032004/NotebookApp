const mongoose = require("mongoose");

const NotebookSchema = new mongoose.Schema({
  name: String,
  color: String
});

module.exports = mongoose.model("Notebook", NotebookSchema);
