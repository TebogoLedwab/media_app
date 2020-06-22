const express = require('express');

const router = express.Router();

router.get('/', async(req, res) =>{
    try{
        res.json({
            message: "view route is working"
        });
    } catch(err){
        res.json({
            message: err
        });
    }
});

module.exports = router;