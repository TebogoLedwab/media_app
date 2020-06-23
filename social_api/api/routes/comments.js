const express = require("express");
const router = express.Router();
const Comment = require("../models/user");

router.post("/", (req, res) => {
  const comment = new Comment({
    comments: req.body.comments,
  });

  comment.save((err, data) => {
    if (err) {
        res.status(404).json({
            message: err
        })
      
    } else {
      res.status(201).json({
        message: "comment sent",
        comment: data,
      });
    }
  });

});



module.exports = router;
