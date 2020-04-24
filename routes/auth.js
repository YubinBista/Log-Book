const express = require('express');
const router = express.Router();


// @route Get api/auth
//@desc get logged in as a user
//access Private
router.get('/', (req,res)=>{
    res.send("Get logged in as a user")
});

// @route POST api/auth
//@desc Auth user & get token
//access Public
router.post('/', (req,res)=>{
    res.send("Log in user")
});



module.exports = router;