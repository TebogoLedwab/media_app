const express = require('express');

const router = express.Router();

router.patch('/', (req, res) => {
    const likes = req.body.likes;
    res.status(201).json({
        message: "likes updated",
        likes: likes
    });
});

module.exports = router;