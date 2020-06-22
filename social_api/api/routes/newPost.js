const express = require('express');

const router = express.Router();

router.post('/', (req, res) =>{
    const name = req.body.name;
    res.status(200).json({
        message: "post view working",
        name: name
    });
});

module.exports = router;