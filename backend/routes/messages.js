const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

// Add message to a notebook
router.post("/", async (req, res) => {
  const { notebookId, text } = req.body;
  const message = new Message({ notebookId, text });
  await message.save();
  res.json(message);
});

// Get messages for a notebook
router.get("/:notebookId", async (req, res) => {
  const messages = await Message.find({ notebookId: req.params.notebookId });
  res.json(messages);
});

module.exports = router;
