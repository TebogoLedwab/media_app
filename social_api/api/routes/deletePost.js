const express = require('express');

const router = express.Router();

router.delete('/', (req, res)=>{
    res.status(200).json({
        message: "Post deleted"
    });
});

module.exports = router;