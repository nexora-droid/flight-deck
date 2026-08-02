const express = require('express');
const path = require('path');
const loginController = require('../controller/loginController');
const router = express().router;

router.get('/', (req, res)=>{
    res.sendFile('../public/login.html');
})

router.post('/', (req, res)=> {
    loginController.addUser();
})

module.exports = router;