const express = require("express");
const User = require('../models/user');
const router = express.Router();

router.patch("/", async(req, res) => {
  
  try {
    const user = await User.updateOne();
    res.status(201).json({
      message: "likes updated",
      likes: likes,
    });
  } catch {
    res.json(err)
  }
});

module.exports = router;
