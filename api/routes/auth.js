const express = require('express');
const path = require('path');
const authController = require('../controller/authController');
const router = express.router();

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/login.html'));
})

router.post('/signup', authController.addUser);

module.exports = router;