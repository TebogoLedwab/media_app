const express = require('express');
const User = require ('../models/user')
const router = express.Router();

router.get('/', async(req, res) =>{
    try{
        const user = await User.find({});
        res.json(user);
    } catch(err){
        res.json({
            message: err
        });
    }
});

module.exports = router;