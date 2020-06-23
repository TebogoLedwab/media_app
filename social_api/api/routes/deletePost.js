const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.delete("/", async (req, res) => {
    const userId = req.params.id
  try {
    const user = await User.remove({ _id: userId });

    res.status(200).json({
      message: "Post deleted",
    });
  } catch (err) {
    req.json({ err });
  }
});

module.exports = router;
