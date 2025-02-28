const express = require("express");
const Notebook = require("../models/Notebook");

const router = express.Router();

// Create a new notebook
router.post("/", async (req, res) => {
  const { name, color } = req.body;
  const notebook = new Notebook({ name, color });
  await notebook.save();
  res.json(notebook);
});

// Get all notebooks
router.get("/", async (req, res) => {
  const notebooks = await Notebook.find();
  res.json(notebooks);
});

module.exports = router;
