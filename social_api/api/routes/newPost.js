const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/", (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    post: req.body.post,
    comments: req.body.comments,
    like: req.body.like,
  });

  user.save((err, data) => {
    if (err) {
        res.status(404).json({
            message: err
        })
      
    } else {
      res.status(201).json({
        message: "student saved",
        user: data,
      });
    }
  });
});

module.exports = router;
